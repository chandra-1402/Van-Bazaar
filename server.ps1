param(
    [int]$Port = 8000,
    [string]$Path = "$PSScriptRoot\Idea tribe"
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "=================================================="
    Write-Host " Van Bazaar Localhost Server Active"
    Write-Host " URL: $prefix"
    Write-Host " Root Directory: $Path"
    Write-Host "=================================================="
    Write-Host "Press Ctrl+C to stop the server.`n"

    $mimeTypes = @{
        ".html" = "text/html; charset=utf-8"
        ".htm"  = "text/html; charset=utf-8"
        ".css"  = "text/css; charset=utf-8"
        ".js"   = "application/javascript; charset=utf-8"
        ".json" = "application/json; charset=utf-8"
        ".png"  = "image/png"
        ".jpg"  = "image/jpeg"
        ".jpeg" = "image/jpeg"
        ".gif"  = "image/gif"
        ".svg"  = "image/svg+xml"
        ".webp" = "image/webp"
        ".ico"  = "image/x-icon"
        ".woff" = "font/woff"
        ".woff2"= "font/woff2"
        ".ttf"  = "font/ttf"
        ".otf"  = "font/otf"
        ".mp3"  = "audio/mpeg"
        ".wav"  = "audio/wav"
        ".mp4"  = "video/mp4"
        ".txt"  = "text/plain; charset=utf-8"
    }

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        try {
            $rawUrl = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath)
            if ($rawUrl -eq "/" -or [string]::IsNullOrWhiteSpace($rawUrl)) {
                $rawUrl = "/index.html"
            }

            # Normalize path
            $relPath = $rawUrl.TrimStart("/\").Replace("/", "\")
            $targetPath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($Path, $relPath))

            # Directory request
            if ([System.IO.Directory]::Exists($targetPath)) {
                $targetPath = [System.IO.Path]::Combine($targetPath, "index.html")
            }

            # Security: ensure file is within root
            $resolvedRoot = [System.IO.Path]::GetFullPath($Path)
            if (-not $targetPath.StartsWith($resolvedRoot, [System.StringComparison]::OrdinalIgnoreCase) -or -not [System.IO.File]::Exists($targetPath)) {
                $response.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 Not Found</h1><p>The requested file was not found: $rawUrl</p>")
                $response.ContentType = "text/html; charset=utf-8"
                $response.ContentLength64 = $errBytes.Length
                $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
                Write-Host "404 Not Found: $rawUrl"
            } else {
                $ext = [System.IO.Path]::GetExtension($targetPath).ToLower()
                if ($mimeTypes.ContainsKey($ext)) {
                    $response.ContentType = $mimeTypes[$ext]
                } else {
                    $response.ContentType = "application/octet-stream"
                }

                $response.AddHeader("Access-Control-Allow-Origin", "*")
                $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")

                $bytes = [System.IO.File]::ReadAllBytes($targetPath)
                $response.StatusCode = 200
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
                Write-Host "200 OK: $rawUrl ($($bytes.Length) bytes)"
            }
        }
        catch {
            try {
                $response.StatusCode = 500
                $err = [System.Text.Encoding]::UTF8.GetBytes("500 Internal Server Error: $($_.Exception.Message)")
                $response.OutputStream.Write($err, 0, $err.Length)
            } catch {}
        }
        finally {
            try {
                $response.OutputStream.Close()
            } catch {}
        }
    }
}
finally {
    $listener.Stop()
    $listener.Close()
}
