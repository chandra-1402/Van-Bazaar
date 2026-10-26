/**
 * VAN BAZAAR - Application Logic & Leader Access Overview Portal
 * Voice-First Fair Price Platform for Tribal Forest-Produce Collectors
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const navbarWrapper = document.getElementById('navbarWrapper');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  // MSP & Search Elements
  const productsGrid = document.getElementById('productsGrid');
  const searchInput = document.getElementById('searchInput');
  const filterPills = document.querySelectorAll('.filter-pill');
  const btnMainVoiceSearch = document.getElementById('btnMainVoiceSearch');
  const btnHeroListenVoice = document.getElementById('btnHeroListenVoice');

  // Sell Together Hub Elements
  const sellTogetherForm = document.getElementById('sellTogetherForm');
  const collectorName = document.getElementById('collectorName');
  const collectorPhone = document.getElementById('collectorPhone');
  const collectorLocation = document.getElementById('collectorLocation');
  const collectorShg = document.getElementById('collectorShg');
  const produceCheckboxes = document.querySelectorAll('.produce-chk');
  const formTotalWeight = document.getElementById('formTotalWeight');
  const formTotalVal = document.getElementById('formTotalVal');
  const collectiveListingsContainer = document.getElementById('collectiveListingsContainer');
  const activeGroupsCountBadge = document.getElementById('activeGroupsCountBadge');
  const searchListingsInput = document.getElementById('searchListingsInput');
  const btnOpenCalculatorFromHub = document.getElementById('btnOpenCalculatorFromHub');

  // Leader Access Overview Elements
  const btnLeaderAccess = document.getElementById('btnLeaderAccess');
  const leaderModal = document.getElementById('leaderModal');
  const btnCloseLeaderModal = document.getElementById('btnCloseLeaderModal');
  const btnExportLeaderData = document.getElementById('btnExportLeaderData');
  const btnRefreshLeaderData = document.getElementById('btnRefreshLeaderData');
  const leaderSearchInput = document.getElementById('leaderSearchInput');
  const leaderTabBtns = document.querySelectorAll('.leader-tab-btn');
  const leaderTabContents = document.querySelectorAll('.leader-tab-content');
  const kpiActiveUsers = document.getElementById('kpiActiveUsers');
  const kpiOpenGroups = document.getElementById('kpiOpenGroups');
  const kpiTotalWeight = document.getElementById('kpiTotalWeight');
  const kpiGrievancesCount = document.getElementById('kpiGrievancesCount');
  const tabCountGroups = document.getElementById('tabCountGroups');
  const tabCountLogins = document.getElementById('tabCountLogins');
  const tabCountGrievances = document.getElementById('tabCountGrievances');
  const leaderSellingGroupsTableBody = document.getElementById('leaderSellingGroupsTableBody');
  const leaderLoginsTableBody = document.getElementById('leaderLoginsTableBody');
  const leaderGrievancesTableBody = document.getElementById('leaderGrievancesTableBody');

  // Modals & Overlays
  const voiceModal = document.getElementById('voiceModal');
  const btnCloseVoiceModal = document.getElementById('btnCloseVoiceModal');
  const btnVoiceMicRecord = document.getElementById('btnVoiceMicRecord');
  const voiceStatusIndicator = document.getElementById('voiceStatusIndicator');
  const voiceLiveTranscript = document.getElementById('voiceLiveTranscript');
  const voiceTranscriptText = document.getElementById('voiceTranscriptText');
  const voiceResponseText = document.getElementById('voiceResponseText');
  const voiceResponseTranslation = document.getElementById('voiceResponseTranslation');
  const voiceWaveform = document.getElementById('voiceWaveform');
  const quickVoicePrompts = document.getElementById('quickVoicePrompts');
  const btnVoiceAudioToggle = document.getElementById('btnVoiceAudioToggle');
  const btnVoiceAudioStop = document.getElementById('btnVoiceAudioStop');
  const btnVoiceDirectAction = document.getElementById('btnVoiceDirectAction');
  const voiceManualForm = document.getElementById('voiceManualForm');
  const voiceManualInput = document.getElementById('voiceManualInput');
  const btnVoiceLangHi = document.getElementById('btnVoiceLangHi');
  const btnVoiceLangEn = document.getElementById('btnVoiceLangEn');
  const btnVoiceLangSan = document.getElementById('btnVoiceLangSan');

  const calcModal = document.getElementById('calcModal');
  const btnOpenCalculator = document.getElementById('btnOpenCalculator');
  const btnCloseCalcModal = document.getElementById('btnCloseCalcModal');
  const calcProduceSelect = document.getElementById('calcProduceSelect');
  const calcWeightInput = document.getElementById('calcWeightInput');
  const calcWomenInput = document.getElementById('calcWomenInput');
  const resTraderPayout = document.getElementById('resTraderPayout');
  const resMspPayout = document.getElementById('resMspPayout');
  const resGroupBonus = document.getElementById('resGroupBonus');
  const resTotalIncome = document.getElementById('resTotalIncome');
  const resNetExtraGain = document.getElementById('resNetExtraGain');
  const btnConfirmAggregation = document.getElementById('btnConfirmAggregation');

  const grievanceModal = document.getElementById('grievanceModal');
  const btnOpenGrievance = document.getElementById('btnOpenGrievance');
  const btnCloseGrievanceModal = document.getElementById('btnCloseGrievanceModal');
  const grievanceForm = document.getElementById('grievanceForm');
  const btnRecordGrievanceVoice = document.getElementById('btnRecordGrievanceVoice');
  const recordVoiceText = document.getElementById('recordVoiceText');

  const langModal = document.getElementById('langModal');
  const btnLangSelect = document.getElementById('btnLangSelect');
  const btnCloseLangModal = document.getElementById('btnCloseLangModal');
  const langCardOptions = document.querySelectorAll('.lang-card-option');
  const currentLangLabel = document.getElementById('currentLangLabel');

  // Login & OTP Dashboard Elements
  const loginModal = document.getElementById('loginModal');
  const btnLogin = document.getElementById('btnLogin');
  const btnCloseLoginModal = document.getElementById('btnCloseLoginModal');
  const loginModalTitle = document.getElementById('loginModalTitle');
  const loginStep1 = document.getElementById('loginStep1');
  const loginStep2 = document.getElementById('loginStep2');
  const loginForm = document.getElementById('loginForm');
  const btnSendOtpSubmit = document.getElementById('btnSendOtpSubmit');
  const btnVoiceOtpLogin = document.getElementById('btnVoiceOtpLogin');
  const loginNameInput = document.getElementById('loginNameInput');
  const loginPhoneInput = document.getElementById('loginPhoneInput');
  const loginRole = document.getElementById('loginRole');
  const loginKendraSelect = document.getElementById('loginKendraSelect');
  const otpTargetPhoneDisplay = document.getElementById('otpTargetPhoneDisplay');
  const btnEditLoginPhone = document.getElementById('btnEditLoginPhone');
  const generatedOtpBadge = document.getElementById('generatedOtpBadge');
  const btnAutoFillOtp = document.getElementById('btnAutoFillOtp');
  const otpSingleInput = document.getElementById('otpSingleInput');
  const otpBoxes = [
    document.getElementById('otpBox1'),
    document.getElementById('otpBox2'),
    document.getElementById('otpBox3'),
    document.getElementById('otpBox4')
  ];
  const otpKeyBtns = document.querySelectorAll('.otp-key-btn');
  const otpCountdown = document.getElementById('otpCountdown');
  const otpTimerWrapper = document.getElementById('otpTimerWrapper');
  const btnResendOtp = document.getElementById('btnResendOtp');
  const btnVoiceOtpSpeak = document.getElementById('btnVoiceOtpSpeak');
  const btnVerifyOtpSubmit = document.getElementById('btnVerifyOtpSubmit');
  const btnBackToLoginStep1 = document.getElementById('btnBackToLoginStep1');

  // Leader Authorization Gate Elements
  const leaderAuthModal = document.getElementById('leaderAuthModal');
  const btnCloseLeaderAuthModal = document.getElementById('btnCloseLeaderAuthModal');
  const leaderAuthStatusCard = document.getElementById('leaderAuthStatusCard');
  const leaderAuthUserTitle = document.getElementById('leaderAuthUserTitle');
  const leaderAuthUserDesc = document.getElementById('leaderAuthUserDesc');
  const leaderPinForm = document.getElementById('leaderPinForm');
  const leaderPinInput = document.getElementById('leaderPinInput');
  const btnUnlockLeaderModal = document.getElementById('btnUnlockLeaderModal');
  const btnSwitchToLeaderLogin = document.getElementById('btnSwitchToLeaderLogin');

  // Navbar Profile & Member Portal Elements
  const userProfileMenuWrap = document.getElementById('userProfileMenuWrap');
  const btnUserMenuToggle = document.getElementById('btnUserMenuToggle');
  const userAvatarNav = document.getElementById('userAvatarNav');
  const userNameNav = document.getElementById('userNameNav');
  const userRoleNav = document.getElementById('userRoleNav');

  const userMemberModal = document.getElementById('userMemberModal');
  const btnCloseUserMemberModal = document.getElementById('btnCloseUserMemberModal');
  const memberAvatarLg = document.getElementById('memberAvatarLg');
  const memberNameDisplay = document.getElementById('memberNameDisplay');
  const memberKendraDisplay = document.getElementById('memberKendraDisplay');
  const memberRoleBadge = document.getElementById('memberRoleBadge');
  const memberWalletBal = document.getElementById('memberWalletBal');
  const btnMemberStartGroup = document.getElementById('btnMemberStartGroup');
  const btnMemberCheckPrices = document.getElementById('btnMemberCheckPrices');
  const btnMemberRaiseGrievance = document.getElementById('btnMemberRaiseGrievance');
  const btnMemberLeaderDesk = document.getElementById('btnMemberLeaderDesk');
  const btnMemberSupportDesk = document.getElementById('btnMemberSupportDesk');
  const btnLogoutUser = document.getElementById('btnLogoutUser');

  // Footer Shortcuts
  const footerBtnVoice = document.getElementById('footerBtnVoice');
  const footerBtnCalc = document.getElementById('footerBtnCalc');
  const footerBtnGrievance = document.getElementById('footerBtnGrievance');
  const footerBtnKendras = document.getElementById('footerBtnKendras');

  // Toast Component
  const toastMsg = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');

  // Active State & Persistent Storage
  let currentCategory = 'all';
  let currentLanguage = 'en';
  let isSpeaking = false;
  let isRecording = false;
  let activeUtterance = null;
  let voiceAssistantLang = 'hi';
  let recognition = null;
  let isListening = false;
  let grievanceRecognition = null;
  let isGrievanceRecording = false;
  let lastSpokenData = null;

  // Logged User Session & OTP State
  let currentLoggedUser = null;
  try {
    const savedUser = localStorage.getItem('van_bazaar_logged_user');
    currentLoggedUser = savedUser ? JSON.parse(savedUser) : null;
  } catch (e) {
    currentLoggedUser = null;
  }

  let currentGeneratedOtp = '4829';
  let otpTimerInterval = null;
  let pendingLoginProfile = {
    name: 'Sunita Munda (सुनीता मुंडा)',
    phone: '9431188201',
    roleText: 'Tribal Collector / Mahila SHG Member',
    kendra: 'Torpa Van Dhan Vikas Kendra (Khunti)'
  };

  // Load collective listings from localStorage
  let activeListings = [];
  try {
    const saved = localStorage.getItem('van_bazaar_collective_listings');
    activeListings = saved ? JSON.parse(saved) : [...VAN_BAZAAR_DATA.initialCollectiveListings];
  } catch (e) {
    activeListings = [...VAN_BAZAAR_DATA.initialCollectiveListings];
  }

  // Load user logins from localStorage
  let activeLogins = [];
  try {
    const savedLogs = localStorage.getItem('van_bazaar_user_logins');
    activeLogins = savedLogs ? JSON.parse(savedLogs) : [...VAN_BAZAAR_DATA.initialLogins];
  } catch (e) {
    activeLogins = [...VAN_BAZAAR_DATA.initialLogins];
  }

  // Load grievances from localStorage
  let activeGrievances = [];
  try {
    const savedGrv = localStorage.getItem('van_bazaar_grievances');
    activeGrievances = savedGrv ? JSON.parse(savedGrv) : [...VAN_BAZAAR_DATA.initialGrievances];
  } catch (e) {
    activeGrievances = [...VAN_BAZAAR_DATA.initialGrievances];
  }

  // ==========================================================================
  // Web Audio Context for Chime & Activating Browser Audio Stream
  // ==========================================================================
  let audioCtx = null;
  const playAudioChime = () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtx) audioCtx = new AudioContextClass();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;
      // Soft organic wooden marimba-like tone
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(440, now); // A4
      gain1.gain.setValueAtTime(0.08, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.16);

      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(659.25, now + 0.08); // E5
      gain2.gain.setValueAtTime(0.10, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.30);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.30);
    } catch (e) {
      console.warn('Audio chime error:', e);
    }
  };

  // Pre-load voices from SpeechSynthesis
  let availableVoices = [];
  const loadVoices = () => {
    if ('speechSynthesis' in window) {
      availableVoices = window.speechSynthesis.getVoices();
    }
  };
  loadVoices();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  // Stop Audio helper
  const stopAudioSpeaking = () => {
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    isSpeaking = false;
    if (voiceWaveform) voiceWaveform.classList.remove('active');
    if (btnVoiceMicRecord) btnVoiceMicRecord.classList.remove('speaking');
    if (voiceStatusIndicator) {
      voiceStatusIndicator.className = 'voice-status-pill';
      voiceStatusIndicator.innerHTML = '<span>🎙️ Tap Microphone to Speak (माइक दबाकर बोलें)</span>';
    }
    if (btnVoiceAudioStop) btnVoiceAudioStop.style.display = 'none';
    if (btnVoiceAudioToggle) btnVoiceAudioToggle.style.display = 'inline-flex';
  };

  // ==========================================================================
  // ==========================================================================
  // Soft, Natural Indian Female/Girl AI Voice Engine (Hindi, English & Santhali)
  // ==========================================================================
  const isFemaleVoice = (voice) => {
    if (!voice) return false;
    const name = voice.name.toLowerCase();
    // Exclude male voice profiles
    const isMale = name.includes('male') || name.includes('man') || name.includes('hemant') || 
                   name.includes('madhur') || name.includes('ravi') || name.includes('prabhat') || 
                   name.includes('david') || name.includes('george') || name.includes('mark') || 
                   name.includes('guy') || name.includes('stefan') || name.includes('james') ||
                   name.includes('richard') || name.includes('daniel') || name.includes('tom') ||
                   name.includes('alex') || name.includes('fred');
    if (isMale) return false;

    const isExplicitFemale = name.includes('female') || name.includes('woman') || name.includes('girl') ||
                             name.includes('swara') || name.includes('kalpana') || name.includes('heera') ||
                             name.includes('neerja') || name.includes('veena') || name.includes('zira') ||
                             name.includes('priya') || name.includes('aditi') || name.includes('lekha') ||
                             name.includes('samantha') || name.includes('kavya') || name.includes('ananya') ||
                             name.includes('sangeeta') || name.includes('victoria') || name.includes('karen') ||
                             name.includes('google हिन्दी') || name.includes('google');
    return isExplicitFemale || !isMale;
  };

  const getFemaleVoiceForLang = (lang) => {
    if (availableVoices.length === 0) {
      availableVoices = window.speechSynthesis.getVoices();
    }

    if (lang === 'en') {
      // 1. Indian English Female (Neerja, Heera, Veena, Priya)
      const inEnFemale = availableVoices.find(v => 
        (v.lang.startsWith('en-IN') || v.name.toLowerCase().includes('india')) &&
        isFemaleVoice(v) &&
        (v.name.toLowerCase().includes('neerja') || v.name.toLowerCase().includes('heera') || v.name.toLowerCase().includes('veena') || v.name.toLowerCase().includes('female') || !v.name.toLowerCase().includes('ravi'))
      );
      if (inEnFemale) return inEnFemale;

      // 2. Global English Female (Zira, Samantha, Google UK/US Female)
      const globalEnFemale = availableVoices.find(v => 
        v.lang.startsWith('en') && 
        (v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('samantha') || isFemaleVoice(v))
      );
      if (globalEnFemale) return globalEnFemale;
    } else if (lang === 'san') {
      // 1. Native Santhali Female (if available)
      const nativeSan = availableVoices.find(v => 
        (v.lang.startsWith('sat') || v.lang.startsWith('san') || v.name.toLowerCase().includes('santali') || v.name.toLowerCase().includes('santhali')) &&
        isFemaleVoice(v)
      );
      if (nativeSan) return nativeSan;

      // 2. Hindi Female Voice (Swara, Kalpana, Google हिन्दी)
      const hiFemale = availableVoices.find(v => 
        (v.lang.startsWith('hi') || v.lang.includes('Hindi') || v.name.toLowerCase().includes('hindi')) &&
        isFemaleVoice(v) &&
        (v.name.toLowerCase().includes('swara') || v.name.toLowerCase().includes('kalpana') || v.name.toLowerCase().includes('google') || !v.name.toLowerCase().includes('hemant'))
      );
      if (hiFemale) return hiFemale;

      // 3. Indian English Female
      const inEnFemale = availableVoices.find(v => 
        (v.lang.startsWith('en-IN') || v.name.toLowerCase().includes('india')) &&
        isFemaleVoice(v)
      );
      if (inEnFemale) return inEnFemale;
    } else {
      // Hindi: Preferred Indian female voices: Swara, Kalpana, Google हिन्दी, Lekha, Aditi
      const hiFemale = availableVoices.find(v => 
        (v.lang.startsWith('hi') || v.lang.includes('Hindi') || v.name.toLowerCase().includes('hindi')) &&
        isFemaleVoice(v) &&
        (v.name.toLowerCase().includes('swara') || v.name.toLowerCase().includes('kalpana') || v.name.toLowerCase().includes('google') || v.name.toLowerCase().includes('aditi') || v.name.toLowerCase().includes('lekha') || !v.name.toLowerCase().includes('hemant'))
      );
      if (hiFemale) return hiFemale;

      // Indian English Female fallback
      const inEnFemale = availableVoices.find(v => 
        (v.lang.startsWith('en-IN') || v.name.toLowerCase().includes('india')) &&
        isFemaleVoice(v)
      );
      if (inEnFemale) return inEnFemale;
    }

    // Generic Female fallback
    const anyFemale = availableVoices.find(v => isFemaleVoice(v));
    return anyFemale || availableVoices[0] || null;
  };

  const speakText = (textHindi, phoneticHindiFallback = '', englishText = '', textSanthali = '', santhaliDevanagariFallback = '', santhaliPhoneticFallback = '', explicitLang = null) => {
    playAudioChime();

    if (!('speechSynthesis' in window)) {
      showToast('⚠️ Speech Synthesis not supported in this browser.');
      return;
    }

    try {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      if (availableVoices.length === 0) {
        availableVoices = window.speechSynthesis.getVoices();
      }

      const activeLang = explicitLang || voiceAssistantLang;
      let textToRead = textHindi;
      const selectedVoice = getFemaleVoiceForLang(activeLang);

      if (activeLang === 'en') {
        textToRead = englishText || textHindi;
      } else if (activeLang === 'san') {
        if (selectedVoice && (selectedVoice.lang.startsWith('sat') || selectedVoice.lang.startsWith('san') || selectedVoice.name.toLowerCase().includes('santali'))) {
          textToRead = textSanthali || textHindi;
        } else if (selectedVoice && (selectedVoice.lang.startsWith('hi') || selectedVoice.name.toLowerCase().includes('hindi') || selectedVoice.name.toLowerCase().includes('swara') || selectedVoice.name.toLowerCase().includes('kalpana'))) {
          textToRead = santhaliDevanagariFallback || textSanthali || textHindi;
        } else {
          textToRead = santhaliPhoneticFallback || santhaliDevanagariFallback || textSanthali || textHindi;
        }
      } else {
        if (selectedVoice && (selectedVoice.lang.startsWith('hi') || selectedVoice.name.toLowerCase().includes('hindi') || selectedVoice.name.toLowerCase().includes('swara') || selectedVoice.name.toLowerCase().includes('kalpana'))) {
          textToRead = textHindi;
        } else {
          textToRead = phoneticHindiFallback || textHindi;
        }
      }

      const utterance = new SpeechSynthesisUtterance(textToRead);
      activeUtterance = utterance;
      window._vanBazaarActiveUtterance = utterance; // Prevent GC bug in Chrome/Edge

      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
      } else {
        utterance.lang = activeLang === 'en' ? 'en-IN' : 'hi-IN';
      }

      utterance.pitch = 1.14;  // Female / girl voice pitch (clear, melodic, warm tone)
      utterance.rate = 0.88;   // Calm, natural measured pace
      utterance.volume = 1.0;

      const langStatusText = activeLang === 'en' 
        ? '<span>🔊 AI Assistant speaking in English...</span>' 
        : (activeLang === 'san' 
            ? '<span>🔊 AI Assistant speaking in Santhali (ᱥᱟᱱᱛᱟᱲᱤ ᱛᱮ ᱨᱚᱲᱮᱫ-ᱟ)...</span>' 
            : '<span>🔊 AI Assistant speaking in Hindi (हिंदी में सुनें)...</span>');

      utterance.onstart = () => {
        isSpeaking = true;
        if (voiceWaveform) voiceWaveform.classList.add('active');
        if (btnVoiceMicRecord) btnVoiceMicRecord.classList.add('speaking');
        if (voiceStatusIndicator) {
          voiceStatusIndicator.className = 'voice-status-pill speaking';
          voiceStatusIndicator.innerHTML = langStatusText;
        }
        if (btnVoiceAudioStop) btnVoiceAudioStop.style.display = 'inline-flex';
        if (btnVoiceAudioToggle) btnVoiceAudioToggle.style.display = 'none';
      };

      utterance.onend = () => {
        isSpeaking = false;
        if (voiceWaveform) voiceWaveform.classList.remove('active');
        if (btnVoiceMicRecord) btnVoiceMicRecord.classList.remove('speaking');
        if (voiceStatusIndicator) {
          voiceStatusIndicator.className = 'voice-status-pill';
          const micHint = activeLang === 'en' ? 'Tap Mic to Speak (in English)' : (activeLang === 'san' ? 'Tap Mic to Speak (ᱥᱟᱱᱛᱟᱲᱤ / हिंदी)' : 'Tap Mic to Speak (माइक दबाकर बोलें)');
          voiceStatusIndicator.innerHTML = `<span>🎙️ ${micHint}</span>`;
        }
        if (btnVoiceAudioStop) btnVoiceAudioStop.style.display = 'none';
        if (btnVoiceAudioToggle) btnVoiceAudioToggle.style.display = 'inline-flex';
      };

      utterance.onerror = (err) => {
        if (err.error !== 'interrupted' && err.error !== 'canceled') {
          console.warn('Speech error:', err);
        }
        isSpeaking = false;
        if (voiceWaveform) voiceWaveform.classList.remove('active');
        if (btnVoiceMicRecord) btnVoiceMicRecord.classList.remove('speaking');
        if (voiceStatusIndicator) {
          voiceStatusIndicator.className = 'voice-status-pill';
          const micHint = activeLang === 'en' ? 'Tap Mic to Speak (in English)' : (activeLang === 'san' ? 'Tap Mic to Speak (Santhali / ᱥᱟᱱᱛᱟᱲᱤ)' : 'Tap Mic to Speak (Speak in Hindi)');
          voiceStatusIndicator.innerHTML = `<span>🎙️ ${micHint}</span>`;
        }
        if (btnVoiceAudioStop) btnVoiceAudioStop.style.display = 'none';
        if (btnVoiceAudioToggle) btnVoiceAudioToggle.style.display = 'inline-flex';
      };

      try {
        window.speechSynthesis.speak(utterance);
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch (e) {
        console.error('Speech speak failed:', e);
      }

    } catch (err) {
      console.error('Speech synthesis error:', err);
    }
  };

  // ==========================================================================
  // 1. Sticky Navigation & Scroll Spy
  // ==========================================================================
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbarWrapper.classList.add('scrolled');
    } else {
      navbarWrapper.classList.remove('scrolled');
    }

    const sections = document.querySelectorAll('section, footer');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // ==========================================================================
  // 2. Render Live MSP Cards
  // ==========================================================================
  const renderProducts = () => {
    if (!productsGrid) return;
    const query = searchInput.value.trim().toLowerCase();

    const filtered = VAN_BAZAAR_DATA.products.filter(item => {
      const matchesCategory = currentCategory === 'all' || item.categoryKey === currentCategory;
      const matchesQuery = !query || 
        item.name.toLowerCase().includes(query) ||
        item.hindiName.toLowerCase().includes(query) ||
        item.botanicalName.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #fff; border-radius: 20px; border: 1px dashed rgba(11,107,46,0.2);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--text-light); margin-bottom: 1rem;">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <h3 style="color: var(--dark-green); margin-bottom: 0.5rem;">No Produce Found Matching "${query}"</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Try searching for "Mahua", "Lac", "Honey", "Tamarind", or click the microphone to ask in Hindi.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(item => {
      return `
        <div class="product-card fade-up in-view" data-product-id="${item.id}">
          <div>
            <div class="product-card-top">
              <div class="product-icon-wrap">
                ${item.iconSvg}
              </div>
              <div class="trend-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>${item.trendPercent}</span>
              </div>
            </div>

            <div class="product-title-block">
              <h3 class="product-name">${item.name}</h3>
              <div class="product-hindi">${currentLanguage === 'san' ? (item.santhaliName || item.hindiName) : item.hindiName}</div>
              <div class="product-botanical">${item.botanicalName}</div>
            </div>

            <div class="product-price-block">
              <div class="price-unit-col">
                <span class="price-label">Fair MSP Rate</span>
                <div style="display: flex; align-items: baseline; gap: 4px;">
                  <span class="price-main">₹${item.mspPrice}</span>
                  <span class="price-unit">/ ${item.unit}</span>
                </div>
              </div>
              <div class="price-comparison">
                <div class="trader-rate">Trader: ₹${item.marketPrice}</div>
                <div class="delta-pill">${item.priceDelta}</div>
              </div>
            </div>

            <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1.25rem; line-height: 1.5;">
              ${item.description}
            </p>
          </div>

          <div class="product-card-footer">
            <span style="display: flex; align-items: center; gap: 4px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 14 14"></polyline>
              </svg>
              ${item.updatedTime}
            </span>
            <div class="product-actions">
              <button class="btn-card-audio btn-speak-item" data-id="${item.id}" title="हिंदी में दाम सुनें" aria-label="Listen to price in Hindi for ${item.name}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.btn-speak-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = btn.getAttribute('data-id');
        const prod = VAN_BAZAAR_DATA.products.find(p => p.id === prodId);
        if (prod) {
          if (voiceAssistantLang === 'en') {
            speakText(prod.voiceTextHindi, prod.voiceTextPhonetic, prod.voiceTextEnglish, prod.voiceTextSanthali, prod.voiceTextSanthaliDevanagari, prod.voiceTextSanthaliPhonetic, 'en');
            showToast(`📢 ${prod.name}: ₹${prod.mspPrice} per ${prod.unit}`);
          } else if (voiceAssistantLang === 'san') {
            speakText(prod.voiceTextHindi, prod.voiceTextPhonetic, prod.voiceTextEnglish, prod.voiceTextSanthali, prod.voiceTextSanthaliDevanagari, prod.voiceTextSanthaliPhonetic, 'san');
            showToast(`📢 ${prod.santhaliName || prod.name}: ₹${prod.mspPrice} / ${prod.unit}`);
          } else {
            speakText(prod.voiceTextHindi, prod.voiceTextPhonetic, prod.voiceTextEnglish, prod.voiceTextSanthali, prod.voiceTextSanthaliDevanagari, prod.voiceTextSanthaliPhonetic, 'hi');
            showToast(`📢 ${prod.hindiName}: ₹${prod.mspPrice} प्रति किलो`);
          }
        }
      });
    });
  };

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderProducts();
    });
  }

  // ==========================================================================
  // 2B. Advanced Voice Assistant & Natural Language Speech Engine
  // ==========================================================================
  
  // Initialize Web Speech Recognition
  const initSpeechRecognition = () => {
    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionClass) {
      console.warn('SpeechRecognition not supported in this browser.');
      return null;
    }
    const rec = new SpeechRecognitionClass();
    rec.continuous = false;
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    return rec;
  };

  const toggleVoiceListening = () => {
    if (isSpeaking) {
      stopAudioSpeaking();
    }

    if (isListening && recognition) {
      try { recognition.stop(); } catch (e) {}
      return;
    }

    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      showToast('⚠️ Speech recognition is supported in Google Chrome, Edge & Safari. You can also type or click questions below.');
      if (voiceStatusIndicator) {
        voiceStatusIndicator.innerHTML = '<span>⚠️ Mic unavailable in this browser. Type question below</span>';
      }
      return;
    }

    try {
      if (!recognition) {
        recognition = initSpeechRecognition();
      }
      if (!recognition) return;

      recognition.lang = voiceAssistantLang === 'en' ? 'en-IN' : 'hi-IN';

      recognition.onstart = () => {
        isListening = true;
        if (btnVoiceMicRecord) btnVoiceMicRecord.classList.add('listening');
        if (voiceStatusIndicator) {
          voiceStatusIndicator.className = 'voice-status-pill listening';
          voiceStatusIndicator.innerHTML = `<span>🔴 Listening in ${voiceAssistantLang === 'hi' ? 'Hindi' : 'English'}... Speak now</span>`;
        }
        if (voiceWaveform) voiceWaveform.classList.add('active');
        if (voiceLiveTranscript) voiceLiveTranscript.style.display = 'flex';
        if (voiceTranscriptText) voiceTranscriptText.textContent = "Listening to your voice...";
      };

      recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const item = event.results[i];
          if (item.isFinal) {
            finalTranscript += item[0].transcript;
          } else {
            interimTranscript += item[0].transcript;
          }
        }

        const currentText = finalTranscript || interimTranscript;
        if (voiceTranscriptText && currentText) {
          voiceTranscriptText.innerHTML = `<em>"${currentText}"</em>`;
        }

        if (finalTranscript) {
          isListening = false;
          if (btnVoiceMicRecord) btnVoiceMicRecord.classList.remove('listening');
          processAndAnswerVoiceQuery(finalTranscript);
        }
      };

      recognition.onerror = (err) => {
        console.warn('Speech Recognition error:', err);
        isListening = false;
        if (btnVoiceMicRecord) btnVoiceMicRecord.classList.remove('listening');
        if (voiceWaveform) voiceWaveform.classList.remove('active');

        if (err.error === 'not-allowed') {
          if (voiceStatusIndicator) {
            voiceStatusIndicator.className = 'voice-status-pill';
            voiceStatusIndicator.innerHTML = '<span>🔒 Mic permission blocked. Click questions or type below</span>';
          }
          showToast('🔒 Please allow microphone access to talk to the Voice Assistant.');
        } else if (err.error === 'no-speech') {
          if (voiceStatusIndicator) {
            voiceStatusIndicator.className = 'voice-status-pill';
            voiceStatusIndicator.innerHTML = '<span>⏳ No speech detected. Tap mic to try again</span>';
          }
        } else {
          if (voiceStatusIndicator) {
            voiceStatusIndicator.className = 'voice-status-pill';
            voiceStatusIndicator.innerHTML = '<span>🎙️ Tap Microphone to Speak (बोलें)</span>';
          }
        }
      };

      recognition.onend = () => {
        isListening = false;
        if (btnVoiceMicRecord) btnVoiceMicRecord.classList.remove('listening');
        if (!isSpeaking) {
          if (voiceWaveform) voiceWaveform.classList.remove('active');
          if (voiceStatusIndicator && !voiceStatusIndicator.textContent.includes('Speaking')) {
            voiceStatusIndicator.className = 'voice-status-pill';
            voiceStatusIndicator.innerHTML = '<span>🎙️ Tap Microphone to Speak (बोलें)</span>';
          }
        }
      };

      recognition.start();

    } catch (e) {
      console.error('Recognition start error:', e);
      isListening = false;
      if (btnVoiceMicRecord) btnVoiceMicRecord.classList.remove('listening');
    }
  };

  // Natural Language Voice Query Matcher (Hindi, English, Santhali)
  const processAndAnswerVoiceQuery = (queryText) => {
    const raw = queryText.trim().toLowerCase();
    let responseObj = null;

    if (raw.includes('mahua') || raw.includes('महुआ') || raw.includes('mahwa') || raw.includes('phool') || raw.includes('ᱢᱟᱹᱦᱩᱣᱟᱹ') || raw.includes('ᱵᱟᱦᱟ')) {
      responseObj = {
        question: queryText,
        hindi: "आज सूखे महुआ फूल का सरकारी न्यूनतम समर्थन मूल्य ₹35 प्रति किलो है। खुले बाज़ार के बिचौलियों (₹28) से यह 25% अधिक है। खूंटी, तोरपा और मुरहू केंद्रों पर तौल चालू है।",
        phoneticHindi: "Aaj sookhey Mahua phool kaa sarkari MSP bhaav paintis rupaye prati kilo hai. Khunti aur Torpa kendra par taul chaaloo hai.",
        english: "Today's fair MSP for dried Mahua flowers is ₹35 per KG (+25% higher than ₹28 local trader rate). Torpa & Murhu kendras are actively purchasing.",
        santhali: "ᱛᱮᱦᱮᱧ ᱨᱚᱦᱚᱲ ᱢᱟᱹᱦᱩᱣᱟᱹ ᱵᱟᱦᱟ ᱨᱮᱭᱟᱜ ᱥᱚᱨᱠᱟᱨᱤ MSP ᱫᱚᱨ ᱫᱚ ᱯᱮᱜᱮ ᱢᱚᱬᱮ (᱓᱕) ᱴᱟᱠᱟ ᱠᱤᱞᱚ ᱠᱟᱱᱟ᱾ ᱛᱚᱨᱯᱟ ᱟᱨ ᱢᱩᱨᱦᱩ ᱛᱟᱞᱢᱟ ᱨᱮ ᱛᱩᱞᱟᱹ ᱪᱟᱹᱞᱩ ᱢᱮᱱᱟᱜ-ᱟ᱾",
        santhaliDevanagari: "तेहेंज रोहोड़ महुवा बाहा रेयाः सोरकारी MSP दाम दो पेगे मोणे (35) टाका किलो काना। तोरपा आर मुरहू तालमा रे तुला चालू मेनाः-आ।",
        santhaliPhonetic: "Tehenj rohor Mahua baha reyaak sarkari MSP daam do pege mone paintis taka kilo kana. Torpa aar Murhu talma re tula chalu menaak-a.",
        actionText: "🌾 View Mahua Price Card",
        actionFn: () => {
          voiceModal.classList.remove('active');
          const pSection = document.getElementById('prices');
          if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
          if (searchInput) {
            searchInput.value = 'Mahua';
            renderProducts();
          }
        }
      };
    } else if (raw.includes('lac') || raw.includes('लाह') || raw.includes('kusmi') || raw.includes('lakh') || raw.includes('laac') || raw.includes('ᱞᱟᱦᱟ')) {
      responseObj = {
        question: queryText,
        hindi: "कुसमी लाह का उचित सरकारी मूल्य ₹320 प्रति किलो है। स्थानीय बिचौलिए केवल ₹240 देते हैं। 10 किलो लाह बेचने पर आपको पूरे ₹3,200 का सीधा भुगतान मिलेगा।",
        phoneticHindi: "Kusmi Lac kaa bhaav teen sau bees rupaye prati kilo hai. Dus kilo bechney par poore teen hazaar do sau rupaye mileyngay.",
        english: "Grade-1 Kusmi Lac fair MSP is ₹320 per KG (vs ₹240 from traders). Selling 10 KG yields ₹3,200 direct bank transfer.",
        santhali: "ᱠᱩᱥᱢᱤ ᱞᱟᱦᱟ ᱨᱮᱭᱟᱜ ᱥᱚᱨᱠᱟᱨᱤ ᱫᱚᱨ ᱫᱚ ᱯᱮ ᱥᱟᱭ ᱵᱟᱨᱜᱮᱞ (᱓᱒᱐) ᱴᱟᱠᱟ ᱠᱤᱞᱚ ᱠᱟᱱᱟ᱾ ᱜᱮᱞ ᱠᱤᱞᱚ ᱟᱹᱠᱷᱨᱤᱧ ᱞᱮᱠᱷᱟᱱ ᱯᱮ ᱦᱟᱡᱟᱨ ᱵᱟᱨ ᱥᱟᱭ (᱓,᱒᱐᱐) ᱴᱟᱠᱟ ᱥᱚᱡᱷᱮ ᱵᱮᱸᱠ ᱨᱮ ᱧᱟᱢᱚᱜ-ᱟ᱾",
        santhaliDevanagari: "कुसमी लाहा रेयाः सोरकारी दाम दो पे साय बारगेल (320) टाका किलो काना। गेल किलो आख़रींग लेखान पे हज़ार बार साय (3200) टाका सोज्हे बैंक रे ञामोः-आ।",
        santhaliPhonetic: "Kusmi Laha reyaak sarkari daam do pe say bargel teen sau bees taka kilo kana. Gel kilo aakhring lekhan pe hajar bar say taka sojhe bank re nyamok-a.",
        actionText: "🪵 View Kusmi Lac Card",
        actionFn: () => {
          voiceModal.classList.remove('active');
          const pSection = document.getElementById('prices');
          if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
          if (searchInput) {
            searchInput.value = 'Lac';
            renderProducts();
          }
        }
      };
    } else if (raw.includes('imli') || raw.includes('इमली') || raw.includes('tamarind') || raw.includes('tetul') || raw.includes('ᱛᱮᱛᱩᱞ')) {
      responseObj = {
        question: queryText,
        hindi: "बीजरहित जंगली इमली का आज का सरकारी मूल्य ₹36 प्रति किलो तय हुआ है। बिचौलियों के ₹27 से यह ₹9 प्रति किलो अधिक लाभ देता है।",
        phoneticHindi: "Beej rahit jangli imli kaa aaj kaa sarkari daam chhatees rupaye prati kilo tay hua hai.",
        english: "De-seeded wild forest tamarind price today is ₹36 per KG at government Van Kendras (₹9/kg higher than local middlemen).",
        santhali: "ᱡᱟᱝ ᱚᱪᱚᱜ ᱵᱤᱨ ᱛᱮᱛᱩᱞ ᱨᱮᱭᱟᱜ ᱛᱮᱦᱮᱧᱟᱜ ᱥᱚᱨᱠᱟᱨᱤ ᱫᱚᱨ ᱫᱚ ᱯᱮᱜᱮ ᱛᱩᱨᱩᱭ (᱓᱖) ᱴᱟᱠᱟ ᱠᱤᱞᱚ ᱠᱟᱱᱟ᱾",
        santhaliDevanagari: "जांग ओचोः बीर तेतुल रेयाः तेहेंगेयाः सोरकारी दाम दो पेगे तुरुय (36) टाका किलो काना।",
        santhaliPhonetic: "Jang ocho bir tetul reyaak tehenyaak sarkari daam do pege turuy chhatees taka kilo kana.",
        actionText: "🟤 View Tamarind Card",
        actionFn: () => {
          voiceModal.classList.remove('active');
          const pSection = document.getElementById('prices');
          if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
          if (searchInput) {
            searchInput.value = 'Tamarind';
            renderProducts();
          }
        }
      };
    } else if (raw.includes('honey') || raw.includes('shahad') || raw.includes('शहद') || raw.includes('madhu') || raw.includes('ᱧᱮᱞᱮ') || raw.includes('ᱨᱟᱥᱟ')) {
      responseObj = {
        question: queryText,
        hindi: "शुद्ध जंगली शहद का सरकारी समर्थन मूल्य ₹225 प्रति किलो है। खुले बाज़ार के ₹170 से यह ₹55 प्रति किलो अधिक है। सीधे वन धन केंद्र पर जमा कराएं।",
        phoneticHindi: "Shuddh jangli shahad kaa aaj kaa sarkari bhaav do sau pachchees rupaye prati kilo hai.",
        english: "Pure organic multi-floral wild honey MSP is currently ₹225 per KG under Van Dhan (₹55 higher than village middlemen).",
        santhali: "ᱯᱷᱩᱨᱪᱟᱹ ᱵᱤᱨ ᱧᱮᱞᱮ ᱨᱟᱥᱟ ᱨᱮᱭᱟᱜ ᱥᱚᱨᱠᱟᱨᱤ ᱫᱚᱨ ᱫᱚ ᱵᱟᱨ ᱥᱟᱭ ᱵᱟᱨᱜᱮᱞ ᱢᱚᱬᱮ (᱒᱒᱕) ᱴᱟᱠᱟ ᱠᱤᱞᱚ ᱠᱟᱱᱟ᱾",
        santhaliDevanagari: "फुरचा बीर ञेले रासा रेयाः सोरकारी दाम दो बार साय बारगेल मोणे (225) टाका किलो काना।",
        santhaliPhonetic: "Phurcha bir nyele rasa reyaak sarkari daam do bar say bargel mone do sau pachchees taka kilo kana.",
        actionText: "🍯 View Honey Card",
        actionFn: () => {
          voiceModal.classList.remove('active');
          const pSection = document.getElementById('prices');
          if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
          if (searchInput) {
            searchInput.value = 'Honey';
            renderProducts();
          }
        }
      };
    } else if (raw.includes('sal') || raw.includes('saal') || raw.includes('साल') || raw.includes('sakhua') || raw.includes('seed') || raw.includes('ᱥᱟᱨᱡᱚᱢ')) {
      responseObj = {
        question: queryText,
        hindi: "साल बीज का आज का सरकारी मूल्य ₹22 प्रति किलो है। समूह बनाकर 100 किलो से अधिक बेचने पर अतिरिक्त बोनस व मुफ्त ढुलाई मिलती है।",
        phoneticHindi: "Saal beej kaa aaj kaa sarkari bhaav baa-ees rupaye prati kilo hai. Samoohik bikri se extra bonus praapt karein.",
        english: "Sal seed fair MSP today is ₹22 per KG. Collective aggregation provides additional bonus & transportation support.",
        santhali: "ᱥᱟᱨᱡᱚᱢ ᱡᱟᱝ ᱨᱮᱭᱟᱜ ᱛᱮᱦᱮᱧᱟᱜ ᱥᱚᱨᱠᱟᱨᱤ ᱫᱚᱨ ᱫᱚ ᱵᱟᱨᱜᱮᱞ ᱵᱟᱨ (᱒᱒) ᱴᱟᱠᱟ ᱠᱤᱞᱚ ᱠᱟᱱᱟ᱾ ᱢᱤᱫ ᱛᱮ ᱟᱹᱠᱷᱨᱤᱧ ᱠᱟᱛᱮ ᱵᱟᱹᱲᱛᱤ ᱵᱚᱱᱟᱥ ᱧᱟᱢ ᱯᱮ᱾",
        santhaliDevanagari: "सारजोम जांग रेयाः तेहेंगेयाः सोरकारी दाम दो बारगेल बार (22) टाका किलो काना। मिद ते आख़रींग काते बाड़ती बोनस ञाम पे।",
        santhaliPhonetic: "Sarjom jang reyaak tehenyaak sarkari daam do bargel bar baa-ees taka kilo kana. Mid te aakhring kate baarti bonus nyam pe.",
        actionText: "🌱 View Sal Seeds Card",
        actionFn: () => {
          voiceModal.classList.remove('active');
          const pSection = document.getElementById('prices');
          if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
          if (searchInput) {
            searchInput.value = 'Sal';
            renderProducts();
          }
        }
      };
    } else if (raw.includes('harra') || raw.includes('हर्रा') || raw.includes('harda') || raw.includes('haritaki') || raw.includes('ᱨᱳᱞ')) {
      responseObj = {
        question: queryText,
        hindi: "हर्रा फल का आज का भाव ₹18 प्रति किलो है। गुणवत्ता जांच के बाद सीधे आपके बैंक खाते में DBT भुगतान प्राप्त होगा।",
        phoneticHindi: "Harra phal kaa aaj kaa bhaav athaarah rupaye prati kilo hai. Gunvatta jaanch ke baad turant payment mileygaa.",
        english: "Harra dried medicinal fruit fair MSP is ₹18 per KG with direct bank transfer settlement.",
        santhali: "ᱨᱳᱞ ᱡᱚ ᱨᱮᱭᱟᱜ ᱛᱮᱦᱮᱧᱟᱜ ᱥᱚᱨᱠᱟᱨᱤ ᱫᱚᱨ ᱫᱚ ᱜᱮᱞ ᱤᱨᱟᱹᱞ (᱑᱘) ᱴᱟᱠᱟ ᱠᱤᱞᱚ ᱠᱟᱱᱟ᱾",
        santhaliDevanagari: "रोल जो रेयाः तेहेंगेयाः सोरकारी दाम दो गेल इरल (18) टाका किलो काना।",
        santhaliPhonetic: "Rol jo reyaak tehenyaak sarkari daam do gel iral athaarah taka kilo kana.",
        actionText: "🌿 View Harra Card",
        actionFn: () => {
          voiceModal.classList.remove('active');
          const pSection = document.getElementById('prices');
          if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
          if (searchInput) {
            searchInput.value = 'Harra';
            renderProducts();
          }
        }
      };
    } else if (raw.includes('rate') || raw.includes('price') || raw.includes('daam') || raw.includes('bhaav') || raw.includes('msp') || raw.includes('दाम') || raw.includes('भाव') || raw.includes('रेट') || raw.includes('ᱫᱚᱨ')) {
      responseObj = {
        question: queryText,
        hindi: "आज के प्रमुख भाव: महुआ ₹35, कुसमी लाह ₹320, जंगली इमली ₹36, शुद्ध शहद ₹225, साल बीज ₹22 और हर्रा ₹18 प्रति किलो है।",
        phoneticHindi: "Aaj ke mukhya bhaav: Mahua paintis, Kusmi Lac teen sau bees, Imli chhatees, Shahad do sau pachchees rupaye prati kilo hai.",
        english: "Today's Live MSP: Mahua ₹35/KG, Kusmi Lac ₹320/KG, Tamarind ₹36/KG, Honey ₹225/KG, Sal Seed ₹22/KG, Harra ₹18/KG.",
        santhali: "ᱛᱮᱦᱮᱧᱟᱜ ᱫᱚᱨ: ᱢᱟᱹᱦᱩᱣᱟᱹ ᱓᱕ ᱴᱟᱠᱟ, ᱞᱟᱦᱟ ᱓᱒᱐ ᱴᱟᱠᱟ, ᱛᱮᱛᱩᱞ ᱓᱖ ᱴᱟᱠᱟ, ᱧᱮᱞᱮ ᱨᱟᱥᱟ ᱒᱒᱕ ᱴᱟᱠᱟ, ᱥᱟᱨᱡᱚᱢ ᱡᱟᱝ ᱒᱒ ᱴᱟᱠᱟ ᱟᱨ ᱨᱳᱞ ᱑᱘ ᱴᱟᱠᱟ ᱠᱤᱞᱚ ᱠᱟᱱᱟ᱾",
        santhaliDevanagari: "तेहेंगेयाः दाम: महुवा 35 टाका, लाहा 320 टाका, तेतुल 36 टाका, ञेले रासा 225 टाका, सारजोम जांग 22 टाका आर रोल 18 टाका किलो काना।",
        santhaliPhonetic: "Tehenyaak daam: Mahua paintis, Laha teen sau bees, Tetul chhatees, Nyele Rasa do sau pachchees, Sarjom jang baa-ees, Rol athaarah taka kilo kana.",
        actionText: "📊 View All 6 Prices",
        actionFn: () => {
          voiceModal.classList.remove('active');
          const pSection = document.getElementById('prices');
          if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    } else if (raw.includes('samuh') || raw.includes('samooh') || raw.includes('together') || raw.includes('group') || raw.includes('sell') || raw.includes('सामूहिक') || raw.includes('समूह') || raw.includes('बिक्री') || raw.includes('ᱢᱤᱫ ᱛᱮ')) {
      responseObj = {
        question: queryText,
        hindi: "सामूहिक बिक्री में 5 या अधिक महिलाएं मिलकर 50 किलो से अधिक उपज लाती हैं, तो 5% से 10% अतिरिक्त नकद बोनस और मुफ्त सरकारी वाहन ढुलाई मिलती है।",
        phoneticHindi: "Jab paanch yaa adhik mahilayein milkar pachaas kilo se zyaadaa upaj laati hain, to Van Bazaar extra bonus aur free transport deta hai.",
        english: "In Collective Selling, 5+ women aggregating 50+ KG receive 5% to 10% group bonus and free Kendra pickup vehicle.",
        santhali: "ᱡᱚᱠᱷᱚᱱ ᱕ ᱜᱚᱴᱟᱝ ᱥᱮ ᱵᱟᱹᱲᱛᱤ ᱛᱤᱨᱞᱟᱹ ᱢᱤᱫ ᱛᱮ ᱕᱐ ᱠᱤᱞᱚ ᱠᱷᱚᱱ ᱵᱟᱹᱲᱛᱤ ᱡᱤᱱᱤᱥ ᱠᱚ ᱟᱹᱜᱩᱭᱟ, ᱩᱱ ᱡᱚᱦᱚᱜ ᱕% ᱠᱷᱚᱱ ᱑᱐% ᱵᱟᱹᱲᱛᱤ ᱵᱚᱱᱟᱥ ᱟᱨ ᱜᱟᱹᱰᱤ ᱥᱩᱵᱤᱫᱷᱟ ᱧᱟᱢᱚᱜ-ᱟ᱾",
        santhaliDevanagari: "जोखोन 5 गोटांग से बाड़ती तिरलअ मिद ते 50 किलो खोन बाड़ती जिनिस को अगूया, उन जोहोः 5% खोन 10% बाड़ती बोनस आर गाड़ी सुबिधा ञामोः-आ।",
        santhaliPhonetic: "Jokhon mone gotang se baarti tirla mid te pachaas kilo khon baarti jinis ko aguiya, un johoh extra bonus aar transport nyamok-a.",
        actionText: "🤝 Open Sell Together Hub",
        actionFn: () => {
          voiceModal.classList.remove('active');
          const sSection = document.getElementById('services');
          if (sSection) sSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    } else if (raw.includes('calc') || raw.includes('profit') || raw.includes('munafa') || raw.includes('hisab') || raw.includes('labh') || raw.includes('मुनाफा') || raw.includes('कैलकुलेटर') || raw.includes('फायदा') || raw.includes('ᱞᱟᱵᱷ')) {
      responseObj = {
        question: queryText,
        hindi: "सामूहिक मुनाफा कैलकुलेटर से आप तुरंत जान सकते हैं कि बिचौलिए के मुकाबले वन केंद्र पर बेचने से आपको 30% से अधिक अतिरिक्त कमाई होगी।",
        phoneticHindi: "Calculator mein aap dekh saktey hain ki Van Kendra par bechney se tees percent zyaadaa munafa milta hai.",
        english: "Our Collective Earnings Calculator shows you earn ~31% more profit at Van Kendra compared to village middlemen.",
        santhali: "ᱠᱮᱞᱠᱩᱞᱮᱴᱚᱨ ᱨᱮ ᱟᱢᱟᱜ ᱡᱤᱱᱤᱥ ᱟᱨ ᱚᱡᱚᱱ ᱮᱢ ᱢᱮ᱾ ᱱᱚᱣᱟ ᱫᱚ ᱵᱟᱹᱲᱛᱤ ᱞᱟᱵᱷ ᱟᱨ ᱵᱚᱱᱟᱥ ᱮ ᱩᱫᱩᱜ-ᱟ᱾",
        santhaliDevanagari: "कैलकुलेटर रे आमाः जिनिस आर ओजन एम मे। नोवा दो बाड़ती लाभ आर बोनस ए उदुः-आ।",
        santhaliPhonetic: "Calculator re amaak jinis aar wajan em me. Nowa do baarti labh aar bonus e uduk-a.",
        actionText: "🧮 Open Profit Calculator",
        actionFn: () => {
          voiceModal.classList.remove('active');
          calcModal.classList.add('active');
          updateCalculator();
        }
      };
    } else if (raw.includes('shikayat') || raw.includes('complaint') || raw.includes('grievance') || raw.includes('dhoka') || raw.includes('kam daam') || raw.includes('शिकायत') || raw.includes('तौल') || raw.includes('धोखा') || raw.includes('ᱥᱤᱠᱟᱹᱭᱟᱛ')) {
      responseObj = {
        question: queryText,
        hindi: "यदि केंद्र बंद मिले, तौल में गड़बड़ी हो या कम दाम दिया जाए, तो तुरंत वॉयस शिकायत दर्ज करें। ट्राईफेड नोडल अधिकारी 24 घंटे में जांच करेंगे।",
        phoneticHindi: "Aap seedhey mic dabaakar shikayat darj karein. Chaubees ghantey mein TRIFED nodal team dwara jaanch hogi.",
        english: "If a center underpays or scales are faulty, lodge a voice grievance. Submissions are geo-tagged for 24-hour TRIFED escalation.",
        santhali: "ᱟᱢ ᱥᱚᱡᱷᱮ ᱢᱟᱭᱤᱠ ᱛᱮ ᱟᱲᱟᱝ ᱥᱤᱠᱟᱹᱭᱟᱛ ᱮᱢ ᱫᱟᱲᱮᱭᱟᱜ-ᱟ᱾ ᱒᱔ ᱜᱷᱟᱱᱴᱟ ᱨᱮ ᱱᱚᱣᱟ ᱨᱮᱭᱟᱜ ᱡᱟᱸᱪ ᱦᱩᱭᱩᱜ-ᱟ᱾",
        santhaliDevanagari: "आम सोज्हे माइक ते अड़ांग सिकायत एम दाड़ेयाः-आ। 24 घांटा रे नोवा रेयाः जांच हुयुः-आ।",
        santhaliPhonetic: "Aam sojhe mic te arang shikayat em dareyaak-a. Chaubees ghanta re nowa reyaak janch huyuk-a.",
        actionText: "🛡️ Open Grievance Form",
        actionFn: () => {
          voiceModal.classList.remove('active');
          grievanceModal.classList.add('active');
        }
      };
    } else if (raw.includes('kendra') || raw.includes('center') || raw.includes('khunti') || raw.includes('torpa') || raw.includes('murhu') || raw.includes('chakradharpur') || raw.includes('goilkera') || raw.includes('कहाँ') || raw.includes('केंद्र') || raw.includes('ᱛᱟᱞᱢᱟ')) {
      responseObj = {
        question: queryText,
        hindi: "खूंटी में तोरपा व मुरहू केंद्र और पश्चिमी सिंहभूम में चक्रधरपुर व गोइलकेरा केंद्र सुबह 8 बजे से शाम 5 बजे तक खुले हैं।",
        phoneticHindi: "Khunti mein Torpa aur Murhu, aur West Singhbhum mein Chakradharpur aur Goilkera kendra subah 8 se shaam 5 bajey tak khuley hain.",
        english: "Pilot Van Dhan Kendras are active at Torpa & Murhu (Khunti) and Chakradharpur & Goilkera (West Singhbhum), open 8 AM - 5 PM.",
        santhali: "ᱠᱷᱩᱸᱴᱤ ᱨᱮ ᱛᱚᱨᱯᱟ ᱟᱨ ᱢᱩᱨᱦᱩ ᱛᱟᱞᱢᱟ, ᱟᱨ ᱯᱟᱪᱷᱮ ᱥᱤᱝᱵᱷᱩᱢ ᱨᱮ ᱪᱚᱠᱨᱚᱫᱷᱚᱨᱯᱩᱨ ᱟᱨ ᱜᱳᱭᱮᱞᱠᱮᱨᱟ ᱛᱟᱞᱢᱟ ᱥᱮᱛᱟᱜ ᱘ ᱠᱷᱚᱱ ᱕ ᱵᱟᱡᱟ ᱦᱟᱹᱵᱤᱡ ᱡᱷᱤᱡ ᱛᱟᱦᱮᱸᱱᱟ᱾",
        santhaliDevanagari: "खूंटी रे तोरपा आर मुरहू तालमा, आर पाछे सिंगभूम रे चोकरोधोरपुर आर गोयेलकेरा तालमा सेताः 8 खोन 5 बाजा हबिज झिज ताहेना।",
        santhaliPhonetic: "Khunti re Torpa aar Murhu talma, aar Pachhe Singhbhum re Chakradharpur aar Goilkera talma setak 8 khon 5 baja habij jhij tahena.",
        actionText: "📍 View Kendra Helplines",
        actionFn: () => {
          voiceModal.classList.remove('active');
          showToast('📍 4 Pilot Kendras Active in Khunti & West Singhbhum (Open 8 AM - 5 PM)');
        }
      };
    } else if (raw.includes('johar') || raw.includes('ᱡᱚᱦᱟᱨ') || raw.includes('namaste') || raw.includes('hello') || raw.includes('hi') || raw.includes('help') || raw.includes('madad') || raw.includes('kaun') || raw.includes('नमस्ते') || raw.includes('मदद')) {
      responseObj = {
        question: queryText,
        hindi: "नमस्ते! मैं वन बाज़ार का वॉयस सहायक हूँ। आप महुआ, लाह, इमली के समर्थन मूल्य, सामूहिक बिक्री या शिकायत के बारे में पूछ सकते हैं।",
        phoneticHindi: "Namaste! Main Van Bazaar kaa voice assistant hoon. Aap MSP daam aur samoohik bikri ke baare mein pooch saktey hain.",
        english: "Namaste! I am the Van Bazaar Voice Assistant. Ask me about today's MSP prices, collective selling bonus, or lodge grievances.",
        santhali: "ᱡᱚᱦᱟᱨ! ᱤᱧ ᱫᱚ ᱵᱤᱨ ᱵᱟᱡᱟᱨ ᱨᱤᱱᱤᱡ ᱟᱲᱟᱝ AI ᱜᱚᱲᱚᱣᱟᱱ ᱠᱟᱹᱱᱟᱹᱧ᱾ ᱟᱯᱮ ᱛᱮᱦᱮᱧᱟᱜ ᱫᱚᱨ ᱟᱨ ᱢᱤᱫ ᱛᱮ ᱟᱹᱠᱷᱨᱤᱧ ᱵᱟᱵᱚᱛ ᱠᱩᱞᱤ ᱫᱟᱲᱮᱭᱟᱜ-ᱟ ᱯᱮ᱾",
        santhaliDevanagari: "जोहार! इञ दो बीर बाज़ार रीनिज अड़ांग AI गोड़ोवान कनाञ। आपे तेहेंगेयाः दाम आर मिद ते आख़रींग बाबोत कुली दाड़ेयाः-आ पे।",
        santhaliPhonetic: "Johar! Inj do Bir Bazaar rinij arang AI gorowan kananj. Ape tehenyaak daam aar mid te aakhring babot kuli dareyaak-a pe.",
        actionText: "🌾 Ask About Mahua Price",
        actionFn: () => {
          processAndAnswerVoiceQuery("महुआ का भाव क्या है?");
        }
      };
    } else {
      // General Fallback
      responseObj = {
        question: queryText,
        hindi: `"${queryText}" के लिए: आज महुआ ₹35, लाह ₹320, इमली ₹36 व शहद ₹225 प्रति किलो है। अधिक जानकारी हेतु नीचे दिए गए प्रश्नों पर क्लिक करें।`,
        phoneticHindi: `Aapke prashn ke liye: Aaj Mahua paintis, Lac teen sau bees, Imli chhatees rupaye prati kilo hai.`,
        english: `Regarding "${queryText}": Today's MSP includes Mahua ₹35/KG, Lac ₹320/KG, Tamarind ₹36/KG, and Honey ₹225/KG.`,
        santhali: `"${queryText}" ᱞᱟᱹᱜᱤᱫ: ᱛᱮᱦᱮᱧ ᱢᱟᱹᱦᱩᱣᱟᱹ ᱓᱕ ᱴᱟᱠᱟ, ᱞᱟᱦᱟ ᱓᱒᱐ ᱴᱟᱠᱟ, ᱛᱮᱛᱩᱞ ᱓᱖ ᱴᱟᱠᱟ ᱟᱨ ᱧᱮᱞᱮ ᱨᱟᱥᱟ ᱒᱒᱕ ᱴᱟᱠᱟ ᱠᱟᱱᱟ᱾`,
        santhaliDevanagari: `"${queryText}" लगिड: तेहेंज महुवा 35 टाका, लाहा 320 टाका, तेतुल 36 टाका आर ञेले रासा 225 टाका काना।`,
        santhaliPhonetic: `Apeyaak kuli lagid: Tehenj Mahua paintis, Laha teen sau bees, Tetul chhatees taka kana.`,
        actionText: "📊 View All Prices",
        actionFn: () => {
          voiceModal.classList.remove('active');
          const pSection = document.getElementById('prices');
          if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    }

    lastSpokenData = responseObj;

    // Render in UI based on active language
    if (voiceAssistantLang === 'san') {
      if (voiceResponseText) {
        voiceResponseText.innerHTML = `<strong>ᱠᱩᱠᱞᱤ:</strong> "${responseObj.question}"<br><br><strong>ᱛᱮᱞᱟ:</strong> ${responseObj.santhali}`;
      }
      if (voiceResponseTranslation) {
        voiceResponseTranslation.innerHTML = `<strong>हिंदी:</strong> ${responseObj.hindi}<br><strong>English:</strong> ${responseObj.english}`;
      }
    } else if (voiceAssistantLang === 'en') {
      if (voiceResponseText) {
        voiceResponseText.innerHTML = `<strong>Question:</strong> "${responseObj.question}"<br><br><strong>Answer:</strong> ${responseObj.english}`;
      }
      if (voiceResponseTranslation) {
        voiceResponseTranslation.innerHTML = `<strong>हिंदी:</strong> ${responseObj.hindi} | <strong>ᱥᱟᱱᱛᱟᱲᱤ:</strong> ${responseObj.santhali}`;
      }
    } else {
      if (voiceResponseText) {
        voiceResponseText.innerHTML = `<strong>प्रश्न:</strong> "${responseObj.question}"<br><br><strong>उत्तर:</strong> ${responseObj.hindi}`;
      }
      if (voiceResponseTranslation) {
        voiceResponseTranslation.innerHTML = `<strong>English:</strong> ${responseObj.english} | <strong>ᱥᱟᱱᱛᱟᱲᱤ:</strong> ${responseObj.santhali}`;
      }
    }

    if (btnVoiceDirectAction) {
      btnVoiceDirectAction.style.display = 'inline-flex';
      btnVoiceDirectAction.querySelector('span').textContent = responseObj.actionText;
      btnVoiceDirectAction.onclick = responseObj.actionFn;
    }

    // Speak response in active language
    speakText(
      responseObj.hindi,
      responseObj.phoneticHindi,
      responseObj.english,
      responseObj.santhali,
      responseObj.santhaliDevanagari,
      responseObj.santhaliPhonetic,
      voiceAssistantLang
    );
  };

  // Voice Assistant Modal Queries
  const populateVoiceQueries = () => {
    if (!quickVoicePrompts) return;
    quickVoicePrompts.innerHTML = VAN_BAZAAR_DATA.voiceQueries.map(vq => {
      let qText = vq.query;
      let aText = vq.answer;
      if (voiceAssistantLang === 'en') {
        qText = vq.englishQuery || vq.query;
        aText = vq.englishAnswer || vq.answer;
      } else if (voiceAssistantLang === 'san') {
        qText = vq.santhaliQuery || vq.query;
        aText = vq.santhaliAnswer || vq.answer;
      }

      return `
        <button type="button" class="quick-prompt-btn" data-id="${vq.id || ''}" data-query="${vq.query}" data-english-query="${vq.englishQuery || ''}" data-santhali-query="${vq.santhaliQuery || ''}" data-answer="${vq.answer}" data-english-answer="${vq.englishAnswer || ''}" data-santhali-answer="${vq.santhaliAnswer || ''}" data-phonetic="${vq.phoneticAnswer}" data-santhali-devanagari="${vq.santhaliDevanagariAnswer || ''}" data-santhali-phonetic="${vq.santhaliPhoneticAnswer || ''}">
          <span>${vq.icon || '🎙️'} "${qText}"</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        </button>
      `;
    }).join('');

    document.querySelectorAll('.quick-prompt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const queryHi = btn.getAttribute('data-query');
        const queryEn = btn.getAttribute('data-english-query') || queryHi;
        const querySan = btn.getAttribute('data-santhali-query') || queryHi;
        
        const answerHi = btn.getAttribute('data-answer');
        const answerEn = btn.getAttribute('data-english-answer') || answerHi;
        const answerSan = btn.getAttribute('data-santhali-answer') || answerHi;
        const phoneticHi = btn.getAttribute('data-phonetic');
        const sanDevanagari = btn.getAttribute('data-santhali-devanagari') || answerHi;
        const sanPhonetic = btn.getAttribute('data-santhali-phonetic') || phoneticHi;

        const activeQuery = voiceAssistantLang === 'en' ? queryEn : (voiceAssistantLang === 'san' ? querySan : queryHi);
        const activeAnswer = voiceAssistantLang === 'en' ? answerEn : (voiceAssistantLang === 'san' ? answerSan : answerHi);

        if (voiceLiveTranscript) voiceLiveTranscript.style.display = 'flex';
        if (voiceTranscriptText) voiceTranscriptText.innerHTML = `<em>"${activeQuery}"</em>`;

        if (voiceAssistantLang === 'san') {
          if (voiceResponseText) {
            voiceResponseText.innerHTML = `<strong>ᱠᱩᱠᱞᱤ:</strong> "${querySan}"<br><br><strong>ᱛᱮᱞᱟ:</strong> ${answerSan}`;
          }
          if (voiceResponseTranslation) {
            voiceResponseTranslation.innerHTML = `<strong>हिंदी:</strong> ${answerHi}<br><strong>English:</strong> ${answerEn}`;
          }
        } else if (voiceAssistantLang === 'en') {
          if (voiceResponseText) {
            voiceResponseText.innerHTML = `<strong>Question:</strong> "${queryEn}"<br><br><strong>Answer:</strong> ${answerEn}`;
          }
          if (voiceResponseTranslation) {
            voiceResponseTranslation.innerHTML = `<strong>हिंदी:</strong> ${answerHi} | <strong>ᱥᱟᱱᱛᱟᱲᱤ:</strong> ${answerSan}`;
          }
        } else {
          if (voiceResponseText) {
            voiceResponseText.innerHTML = `<strong>प्रश्न:</strong> "${queryHi}"<br><br><strong>उत्तर:</strong> ${answerHi}`;
          }
          if (voiceResponseTranslation) {
            voiceResponseTranslation.innerHTML = `<strong>English:</strong> ${answerEn} | <strong>ᱥᱟᱱᱛᱟᱲᱤ:</strong> ${answerSan}`;
          }
        }

        lastSpokenData = {
          question: activeQuery,
          hindi: answerHi,
          phoneticHindi: phoneticHi,
          english: answerEn,
          santhali: answerSan,
          santhaliDevanagari: sanDevanagari,
          santhaliPhonetic: sanPhonetic,
          actionText: "🌾 Explore Rates",
          actionFn: () => {
            voiceModal.classList.remove('active');
            const pSection = document.getElementById('prices');
            if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
          }
        };

        if (btnVoiceDirectAction) {
          btnVoiceDirectAction.style.display = 'inline-flex';
          btnVoiceDirectAction.querySelector('span').textContent = "🌾 Explore Rates";
          btnVoiceDirectAction.onclick = lastSpokenData.actionFn;
        }

        speakText(answerHi, phoneticHi, answerEn, answerSan, sanDevanagari, sanPhonetic, voiceAssistantLang);
      });
    });
  };

  // Speak Welcome Introductory Speech helper
  const speakWelcomeMessage = (lang = voiceAssistantLang) => {
    const hs = VAN_BAZAAR_DATA.heroSpeech;
    lastSpokenData = {
      question: lang === 'en' ? "Welcome to Van Bazaar" : (lang === 'san' ? "ᱡᱚᱦᱟᱨ! ᱵᱤᱨ ᱵᱟᱡᱟᱨ ᱨᱮ ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ" : "नमस्ते! वन बाज़ार में आपका स्वागत है"),
      hindi: hs.hindi,
      phoneticHindi: hs.phoneticHindi,
      english: hs.english,
      santhali: hs.santhali,
      santhaliDevanagari: hs.santhaliDevanagari,
      santhaliPhonetic: hs.santhaliPhonetic,
      actionText: "🌾 Explore Rates",
      actionFn: () => {
        voiceModal.classList.remove('active');
        const pSection = document.getElementById('prices');
        if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (voiceLiveTranscript) voiceLiveTranscript.style.display = 'flex';
    if (voiceTranscriptText) {
      voiceTranscriptText.innerHTML = lang === 'en'
        ? `<em>"Welcome to Van Bazaar voice assistant"</em>`
        : (lang === 'san' 
            ? `<em>"ᱡᱚᱦᱟᱨ! ᱵᱤᱨ ᱵᱟᱡᱟᱨ ᱨᱮ ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ"</em>`
            : `<em>"नमस्ते! वन बाज़ार में आपका स्वागत है"</em>`);
    }

    if (lang === 'en') {
      if (voiceResponseText) {
        voiceResponseText.innerHTML = `<strong>Van Bazaar AI:</strong> "${hs.english}"`;
      }
      if (voiceResponseTranslation) {
        voiceResponseTranslation.innerHTML = `<strong>Hindi:</strong> "${hs.hindi}"<br><strong>Santhali (ᱥᱟᱱᱛᱟᱲᱤ):</strong> "${hs.santhali}"`;
      }
      speakText(hs.hindi, hs.phoneticHindi, hs.english, hs.santhali, hs.santhaliDevanagari, hs.santhaliPhonetic, 'en');
    } else if (lang === 'san') {
      if (voiceResponseText) {
        voiceResponseText.innerHTML = `<strong>ᱵᱤᱨ ᱵᱟᱡᱟᱨ AI:</strong> "${hs.santhali}"`;
      }
      if (voiceResponseTranslation) {
        voiceResponseTranslation.innerHTML = `<strong>English:</strong> "${hs.english}"<br><strong>Hindi:</strong> "${hs.hindi}"`;
      }
      speakText(hs.hindi, hs.phoneticHindi, hs.english, hs.santhali, hs.santhaliDevanagari, hs.santhaliPhonetic, 'san');
    } else {
      if (voiceResponseText) {
        voiceResponseText.innerHTML = `<strong>Van Bazaar AI:</strong> "${hs.hindi}"`;
      }
      if (voiceResponseTranslation) {
        voiceResponseTranslation.innerHTML = `<strong>English:</strong> "${hs.english}"<br><strong>Santhali (ᱥᱟᱱᱛᱟᱲᱤ):</strong> "${hs.santhali}"`;
      }
      speakText(hs.hindi, hs.phoneticHindi, hs.english, hs.santhali, hs.santhaliDevanagari, hs.santhaliPhonetic, 'hi');
    }
  };

  const updateVoiceLangTabsUI = () => {
    if (btnVoiceLangHi) btnVoiceLangHi.classList.toggle('active', voiceAssistantLang === 'hi');
    if (btnVoiceLangEn) btnVoiceLangEn.classList.toggle('active', voiceAssistantLang === 'en');
    if (btnVoiceLangSan) btnVoiceLangSan.classList.toggle('active', voiceAssistantLang === 'san');
  };

  const setVoiceAssistantLanguage = (lang, speak = true) => {
    voiceAssistantLang = lang;
    updateVoiceLangTabsUI();
    populateVoiceQueries();

    if (voiceStatusIndicator) {
      if (lang === 'san') {
        voiceStatusIndicator.innerHTML = '<span>🎙️ Tap Microphone to Speak (Santhali / ᱥᱟᱱᱛᱟᱲᱤ)</span>';
      } else if (lang === 'en') {
        voiceStatusIndicator.innerHTML = '<span>🎙️ Tap Microphone to Speak (Speak in English)</span>';
      } else {
        voiceStatusIndicator.innerHTML = '<span>🎙️ Tap Microphone to Speak (Speak in Hindi / हिंदी)</span>';
      }
    }

    const langLabel = lang === 'san' ? 'ᱥᱟᱱᱛᱟᱲᱤ (Santhali)' : (lang === 'en' ? 'English' : 'हिंदी (Hindi)');
    showToast(`🌿 Voice set to ${langLabel}`);

    if (speak) {
      speakWelcomeMessage(lang);
    }
  };

  // Wire up Voice Assistant controls
  if (btnVoiceMicRecord) {
    btnVoiceMicRecord.addEventListener('click', toggleVoiceListening);
  }

  if (btnVoiceAudioToggle) {
    btnVoiceAudioToggle.addEventListener('click', () => {
      if (lastSpokenData) {
        speakText(
          lastSpokenData.hindi,
          lastSpokenData.phoneticHindi || lastSpokenData.phonetic,
          lastSpokenData.english,
          lastSpokenData.santhali,
          lastSpokenData.santhaliDevanagari,
          lastSpokenData.santhaliPhonetic,
          voiceAssistantLang
        );
      } else {
        speakWelcomeMessage(voiceAssistantLang);
      }
    });
  }

  if (btnVoiceAudioStop) {
    btnVoiceAudioStop.addEventListener('click', stopAudioSpeaking);
  }

  if (voiceManualForm) {
    voiceManualForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!voiceManualInput) return;
      const text = voiceManualInput.value.trim();
      if (!text) return;

      if (voiceLiveTranscript) voiceLiveTranscript.style.display = 'flex';
      if (voiceTranscriptText) voiceTranscriptText.innerHTML = `<em>"${text}"</em>`;

      processAndAnswerVoiceQuery(text);
      voiceManualInput.value = '';
    });
  }

  // Voice Language Tabs inside modal
  if (btnVoiceLangHi) {
    btnVoiceLangHi.addEventListener('click', () => {
      setVoiceAssistantLanguage('hi', true);
    });
  }

  if (btnVoiceLangEn) {
    btnVoiceLangEn.addEventListener('click', () => {
      setVoiceAssistantLanguage('en', true);
    });
  }

  if (btnVoiceLangSan) {
    btnVoiceLangSan.addEventListener('click', () => {
      setVoiceAssistantLanguage('san', true);
    });
  }

  const openVoiceAssistant = (mode = 'welcome') => {
    voiceModal.classList.add('active');
    updateVoiceLangTabsUI();
    populateVoiceQueries();
    
    if (mode === 'mic') {
      setTimeout(() => {
        toggleVoiceListening();
      }, 400);
    } else {
      // Automatically speaks welcome speech in active language without asking user to click replay!
      speakWelcomeMessage(voiceAssistantLang);
    }
  };

  if (btnHeroListenVoice) {
    btnHeroListenVoice.addEventListener('click', () => {
      openVoiceAssistant('welcome');
    });
  }

  if (btnMainVoiceSearch) {
    btnMainVoiceSearch.addEventListener('click', () => {
      openVoiceAssistant('mic');
    });
  }

  if (btnCloseVoiceModal) {
    btnCloseVoiceModal.addEventListener('click', () => {
      voiceModal.classList.remove('active');
      stopAudioSpeaking();
      if (isListening && recognition) {
        try { recognition.stop(); } catch (e) {}
      }
    });
  }

  // ==========================================================================
  // 3. Sell Together Hub (Registration Form + Live Public Listings Board)
  // ==========================================================================
  const updateFormEstimate = () => {
    let totalKg = 0;
    let totalVal = 0;

    produceCheckboxes.forEach(chk => {
      const prodKey = chk.getAttribute('data-prod');
      const mspRate = parseFloat(chk.getAttribute('data-msp')) || 0;
      const qtyInput = document.getElementById(`qty-${prodKey}`);
      const rowItem = document.getElementById(`row-${prodKey}`);

      if (chk.checked) {
        if (qtyInput) {
          qtyInput.disabled = false;
          const val = parseFloat(qtyInput.value) || 0;
          totalKg += val;
          totalVal += (val * mspRate);
        }
        if (rowItem) rowItem.classList.add('selected');
      } else {
        if (qtyInput) qtyInput.disabled = true;
        if (rowItem) rowItem.classList.remove('selected');
      }
    });

    if (formTotalWeight) formTotalWeight.textContent = `${totalKg} KG`;
    if (formTotalVal) formTotalVal.textContent = `₹${Math.round(totalVal).toLocaleString('en-IN')}`;
  };

  produceCheckboxes.forEach(chk => {
    chk.addEventListener('change', updateFormEstimate);
    const prodKey = chk.getAttribute('data-prod');
    const qtyInput = document.getElementById(`qty-${prodKey}`);
    if (qtyInput) {
      qtyInput.addEventListener('input', updateFormEstimate);
    }
  });

  const renderCollectiveListings = () => {
    if (!collectiveListingsContainer) return;
    const filterQuery = searchListingsInput ? searchListingsInput.value.trim().toLowerCase() : '';

    const filtered = activeListings.filter(item => {
      if (!filterQuery) return true;
      const matchName = item.leaderName.toLowerCase().includes(filterQuery);
      const matchLocation = item.location.toLowerCase().includes(filterQuery);
      const matchKendra = item.kendra.toLowerCase().includes(filterQuery);
      const matchItems = item.items.some(it => it.product.toLowerCase().includes(filterQuery));
      return matchName || matchLocation || matchKendra || matchItems;
    });

    if (activeGroupsCountBadge) {
      activeGroupsCountBadge.textContent = `${activeListings.length} Active Groups`;
    }

    if (filtered.length === 0) {
      collectiveListingsContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; background: var(--light-green-subtle); border-radius: 16px;">
          <p style="color: var(--text-muted); font-size: 0.95rem;">No active groups match your search. Be the first to post above!</p>
        </div>
      `;
      return;
    }

    collectiveListingsContainer.innerHTML = filtered.map(item => {
      const itemsTags = item.items.map(it => `
        <span class="produce-qty-tag">
          🌱 ${it.product}: <strong>${it.qty} ${it.unit}</strong>
        </span>
      `).join('');

      return `
        <div class="group-listing-card" data-listing-id="${item.id}">
          <div class="listing-top-row">
            <div>
              <div class="listing-leader-name">${item.leaderName}</div>
              <div class="listing-location-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${item.location}
              </div>
            </div>
            <span class="listing-status-pill">${item.status}</span>
          </div>

          <div class="listing-items-tags">
            ${itemsTags}
          </div>

          <div class="listing-footer-bar">
            <div class="listing-weight-total">
              📦 Total: <strong>${item.totalWeight} KG</strong>
              <span style="font-size: 0.78rem; font-weight: normal; color: var(--text-muted);">(${item.createdAt})</span>
            </div>

            <div style="display: flex; gap: 0.4rem;">
              <a href="tel:${item.phone}" class="listing-contact-btn" title="Call ${item.leaderName}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>${item.phone}</span>
              </a>
              <button type="button" class="listing-contact-btn btn-join-group" data-id="${item.id}" data-name="${item.leaderName}" style="background: #10B981;">
                <span>🤝 Join</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.btn-join-group').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const leader = btn.getAttribute('data-name');
        showToast(`🤝 Connected with ${leader}! Van Kendra aggregation request sent.`);
      });
    });
  };

  if (searchListingsInput) {
    searchListingsInput.addEventListener('input', renderCollectiveListings);
  }

  // Handle Form Submission
  if (sellTogetherForm) {
    sellTogetherForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = collectorName.value.trim();
      const phone = collectorPhone.value.trim();
      const location = collectorLocation.value;
      const shg = collectorShg.value.trim();

      const selectedItems = [];
      let totalBatchKg = 0;

      produceCheckboxes.forEach(chk => {
        if (chk.checked) {
          const prodKey = chk.getAttribute('data-prod');
          const prodName = chk.getAttribute('data-name');
          const qtyInput = document.getElementById(`qty-${prodKey}`);
          const qty = parseFloat(qtyInput.value) || 0;
          if (qty > 0) {
            selectedItems.push({
              product: prodName,
              qty: qty,
              unit: "KG"
            });
            totalBatchKg += qty;
          }
        }
      });

      if (selectedItems.length === 0) {
        showToast('⚠️ Please select at least one produce and enter quantity.');
        return;
      }

      const newListing = {
        id: "GRP-" + Math.floor(100 + Math.random() * 900),
        leaderName: shg ? `${name} (${shg})` : name,
        phone: phone,
        location: location,
        kendra: location,
        items: selectedItems,
        totalWeight: totalBatchKg,
        membersCount: 1,
        createdAt: "Just now",
        status: "Open for Nearby Collectors"
      };

      activeListings.unshift(newListing);

      try {
        localStorage.setItem('van_bazaar_collective_listings', JSON.stringify(activeListings));
      } catch (err) {}

      renderCollectiveListings();
      renderLeaderDashboard();

      speakText(`${name} जी, आपकी ${totalBatchKg} किलो वनोपज की सामूहिक बिक्री सूची जुड़ गई है।`, `${name} ji, aapki ${totalBatchKg} kilo vanopaj ki samoohik bikri list jud gayi hai.`);
      showToast(`🎉 Listing added! Other collectors can now call ${phone} to combine produce.`);

      sellTogetherForm.reset();
      const defaultMahua = document.getElementById('row-mahua');
      if (defaultMahua) {
        const mahuaChk = defaultMahua.querySelector('.produce-chk');
        if (mahuaChk) mahuaChk.checked = true;
      }
      updateFormEstimate();
    });
  }

  if (btnOpenCalculatorFromHub) {
    btnOpenCalculatorFromHub.addEventListener('click', () => {
      calcModal.classList.add('active');
      updateCalculator();
    });
  }

  // ==========================================================================
  // 4. Leader Access Overview Dashboard Logic
  // ==========================================================================
  const renderLeaderDashboard = () => {
    // 1. Compute KPIs
    const totalLoginsCount = activeLogins.length;
    const totalGroupsCount = activeListings.length;
    const totalWeightKg = activeListings.reduce((sum, grp) => sum + (parseFloat(grp.totalWeight) || 0), 0);
    const activeGrvCount = activeGrievances.filter(g => !g.status.includes('Resolved')).length;

    if (kpiActiveUsers) kpiActiveUsers.textContent = `${totalLoginsCount} Logins`;
    if (kpiOpenGroups) kpiOpenGroups.textContent = `${totalGroupsCount} Batches`;
    if (kpiTotalWeight) kpiTotalWeight.textContent = `${totalWeightKg.toLocaleString('en-IN')} KG`;
    if (kpiGrievancesCount) kpiGrievancesCount.textContent = `${activeGrvCount} Active`;

    if (tabCountGroups) tabCountGroups.textContent = totalGroupsCount;
    if (tabCountLogins) tabCountLogins.textContent = totalLoginsCount;
    if (tabCountGrievances) tabCountGrievances.textContent = activeGrievances.length;

    const query = leaderSearchInput ? leaderSearchInput.value.trim().toLowerCase() : '';

    // Render Tab 1: Collective Selling Directory
    if (leaderSellingGroupsTableBody) {
      const filteredGroups = activeListings.filter(grp => {
        if (!query) return true;
        const matchLeader = grp.leaderName.toLowerCase().includes(query);
        const matchPhone = grp.phone.includes(query);
        const matchLoc = grp.location.toLowerCase().includes(query);
        const matchItems = grp.items.some(i => i.product.toLowerCase().includes(query));
        return matchLeader || matchPhone || matchLoc || matchItems;
      });

      if (filteredGroups.length === 0) {
        leaderSellingGroupsTableBody.innerHTML = `
          <tr>
            <td colspan="8" style="text-align: center; padding: 2rem; color: var(--text-muted);">
              No collective batches matching "${query}".
            </td>
          </tr>
        `;
      } else {
        leaderSellingGroupsTableBody.innerHTML = filteredGroups.map(grp => {
          const itemsList = grp.items.map(it => `<strong>${it.product}</strong>: ${it.qty} ${it.unit}`).join(', ');

          return `
            <tr>
              <td><span style="font-weight: 700; color: var(--primary);">${grp.id}</span></td>
              <td><strong>${grp.leaderName}</strong></td>
              <td>
                <a href="tel:${grp.phone}" style="color: var(--primary); font-weight: 600; text-decoration: underline;">
                  📞 ${grp.phone}
                </a>
              </td>
              <td>${grp.location}</td>
              <td style="font-size: 0.85rem;">${itemsList}</td>
              <td><strong>${grp.totalWeight} KG</strong></td>
              <td><span class="listing-status-pill">${grp.status}</span></td>
              <td>
                <div style="display: flex; gap: 0.4rem;">
                  <button type="button" class="btn btn-outline btn-sm btn-dispatch-vehicle" data-id="${grp.id}" data-name="${grp.leaderName}" style="padding: 0.25rem 0.6rem; font-size: 0.78rem;">
                    🚚 Dispatch
                  </button>
                  <button type="button" class="btn btn-primary btn-sm btn-approve-payout" data-id="${grp.id}" data-name="${grp.leaderName}" style="padding: 0.25rem 0.6rem; font-size: 0.78rem;">
                    ✅ Approve
                  </button>
                </div>
              </td>
            </tr>
          `;
        }).join('');

        // Action listeners
        document.querySelectorAll('.btn-dispatch-vehicle').forEach(btn => {
          btn.addEventListener('click', () => {
            const name = btn.getAttribute('data-name');
            showToast(`🚚 Kendra Transport Van dispatched for ${name}'s aggregation batch!`);
          });
        });

        document.querySelectorAll('.btn-approve-payout').forEach(btn => {
          btn.addEventListener('click', () => {
            const name = btn.getAttribute('data-name');
            showToast(`✅ MSP Weight & DBT Payout approved for ${name}.`);
          });
        });
      }
    }

    // Render Tab 2: User Logins Stream
    if (leaderLoginsTableBody) {
      const filteredLogins = activeLogins.filter(log => {
        if (!query) return true;
        return log.name.toLowerCase().includes(query) ||
               log.phone.includes(query) ||
               log.role.toLowerCase().includes(query) ||
               log.kendra.toLowerCase().includes(query);
      });

      if (filteredLogins.length === 0) {
        leaderLoginsTableBody.innerHTML = `
          <tr>
            <td colspan="8" style="text-align: center; padding: 2rem; color: var(--text-muted);">
              No login logs matching "${query}".
            </td>
          </tr>
        `;
      } else {
        leaderLoginsTableBody.innerHTML = filteredLogins.map(log => {
          return `
            <tr>
              <td><span style="font-weight: 600; color: var(--text-light);">${log.id}</span></td>
              <td><strong>${log.name}</strong></td>
              <td><a href="tel:${log.phone}" style="color: var(--text-main);">${log.phone}</a></td>
              <td><span class="badge-role">${log.role}</span></td>
              <td>${log.kendra}</td>
              <td><span class="badge-auth">🔒 ${log.authType}</span></td>
              <td>${log.time}</td>
              <td>
                <span style="display: inline-flex; align-items: center; gap: 4px; font-weight: 700; color: ${log.status === 'Active' ? '#15803D' : '#94A3B8'}; font-size: 0.8rem;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: ${log.status === 'Active' ? '#22C55E' : '#94A3B8'};"></span>
                  ${log.status}
                </span>
              </td>
            </tr>
          `;
        }).join('');
      }
    }

    // Render Tab 3: Grievances Desk
    if (leaderGrievancesTableBody) {
      const filteredGrvs = activeGrievances.filter(grv => {
        if (!query) return true;
        return grv.collectorPhone.includes(query) ||
               grv.kendra.toLowerCase().includes(query) ||
               grv.details.toLowerCase().includes(query) ||
               grv.category.toLowerCase().includes(query);
      });

      if (filteredGrvs.length === 0) {
        leaderGrievancesTableBody.innerHTML = `
          <tr>
            <td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">
              No field grievances matching "${query}".
            </td>
          </tr>
        `;
      } else {
        leaderGrievancesTableBody.innerHTML = filteredGrvs.map((grv, idx) => {
          return `
            <tr>
              <td><span style="font-weight: 700; color: #DC2626;">${grv.id}</span></td>
              <td><a href="tel:${grv.collectorPhone}" style="color: var(--primary); font-weight: 600;">📞 ${grv.collectorPhone}</a></td>
              <td>${grv.kendra}</td>
              <td><span style="font-size: 0.82rem; font-weight: 600; color: var(--dark-green);">${grv.category}</span></td>
              <td style="font-size: 0.85rem; max-width: 280px;"><em>"${grv.details}"</em></td>
              <td>${grv.time}</td>
              <td>
                <button type="button" class="btn btn-outline btn-sm btn-resolve-grv" data-index="${idx}" style="padding: 0.25rem 0.6rem; font-size: 0.78rem; border-color: #10B981; color: #047857;">
                  ${grv.status.includes('Resolved') ? '✅ Resolved' : '🔍 Mark Resolved'}
                </button>
              </td>
            </tr>
          `;
        }).join('');

        document.querySelectorAll('.btn-resolve-grv').forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-index'));
            if (activeGrievances[idx]) {
              activeGrievances[idx].status = 'Resolved - Verified by Leader Desk';
              try {
                localStorage.setItem('van_bazaar_grievances', JSON.stringify(activeGrievances));
              } catch (e) {}
              renderLeaderDashboard();
              showToast(`🛡️ Grievance ${activeGrievances[idx].id} marked as Resolved!`);
            }
          });
        });
      }
    }
  };

  // Tab switching in Leader Dashboard
  leaderTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      leaderTabBtns.forEach(b => b.classList.remove('active'));
      leaderTabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetTabId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  // Leader search filtering
  if (leaderSearchInput) {
    leaderSearchInput.addEventListener('input', renderLeaderDashboard);
  }

  // Leader Refresh button
  if (btnRefreshLeaderData) {
    btnRefreshLeaderData.addEventListener('click', () => {
      renderLeaderDashboard();
      showToast('🔄 Leader portal synchronized with live field data!');
    });
  }

  // Helper: Check if logged-in user has Leader privileges
  const isUserLeader = () => {
    if (!currentLoggedUser) return false;
    return currentLoggedUser.role === 'incharge' || currentLoggedUser.role === 'officer';
  };

  // Open & Close Leader Modal with Access Control
  if (btnLeaderAccess) {
    btnLeaderAccess.addEventListener('click', () => {
      if (isUserLeader()) {
        // User is already verified Leader
        leaderModal.classList.add('active');
        renderLeaderDashboard();
        speakText("वन केंद्र नेतृत्व पोर्टल में आपका स्वागत है।", "Van Kendra Nodal Leader Portal mein aapka swagat hai.");
      } else {
        // Restrict access: Prompt for Leader PIN
        if (leaderAuthUserTitle && leaderAuthUserDesc) {
          if (currentLoggedUser) {
            leaderAuthUserTitle.textContent = `${currentLoggedUser.name} (${currentLoggedUser.roleText || 'Collector'})`;
            leaderAuthUserDesc.textContent = "Your account is registered as a Tribal Collector. The Leader Portal is restricted to Center In-Charges.";
          } else {
            leaderAuthUserTitle.textContent = "Guest / Unauthenticated User";
            leaderAuthUserDesc.textContent = "Please enter the Nodal Leader PIN (2026) or login with an In-Charge account.";
          }
        }
        if (leaderPinInput) leaderPinInput.value = '';
        if (leaderAuthModal) leaderAuthModal.classList.add('active');
        setTimeout(() => { if (leaderPinInput) leaderPinInput.focus(); }, 150);
        speakText("यह पोर्टल केवल केंद्र प्रभारियों के लिए सुरक्षित है। कृपया लीडर पिन दर्ज करें।", "Leader PIN required for administrative access.");
      }
    });
  }

  if (btnCloseLeaderModal) {
    btnCloseLeaderModal.addEventListener('click', () => {
      leaderModal.classList.remove('active');
    });
  }

  if (btnCloseLeaderAuthModal) {
    btnCloseLeaderAuthModal.addEventListener('click', () => {
      leaderAuthModal.classList.remove('active');
    });
  }

  // Leader PIN Verification Form Submit
  if (leaderPinForm) {
    leaderPinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPin = leaderPinInput ? leaderPinInput.value.trim() : '';

      // Official Leader PINs: 2026, 9431, 1234
      if (enteredPin === '2026' || enteredPin === '9431' || enteredPin === '1234') {
        leaderAuthModal.classList.remove('active');
        leaderModal.classList.add('active');
        renderLeaderDashboard();
        showToast('👑 Leader PIN Verified! Administrative Access Unlocked.');
        speakText("लीडर पिन सत्यापित हुआ। नेतृत्व पोर्टल में आपका स्वागत है।", "Leader PIN Verified. Welcome to Nodal Dashboard.");
      } else {
        showToast('⛔ Access Denied: Incorrect Leader PIN. Only authorized in-charges can access.');
        if (leaderPinInput) {
          leaderPinInput.style.borderColor = '#EF4444';
          leaderPinInput.style.background = '#FEE2E2';
          setTimeout(() => {
            leaderPinInput.style.borderColor = '';
            leaderPinInput.style.background = '';
          }, 2000);
          leaderPinInput.focus();
        }
        speakText("गलत लीडर पिन। एक्सेस अस्वीकृत।", "Incorrect Leader PIN. Access Denied.");
      }
    });
  }

  // Switch to Leader Login Button
  if (btnSwitchToLeaderLogin) {
    btnSwitchToLeaderLogin.addEventListener('click', () => {
      if (leaderAuthModal) leaderAuthModal.classList.remove('active');
      if (loginModal) {
        showLoginStep1();
        loginModal.classList.add('active');
        if (loginNameInput) loginNameInput.value = "Birbaha Hansda (बीरबाहा हांसदा)";
        if (loginPhoneInput) loginPhoneInput.value = "9431366420";
        if (loginRole) loginRole.value = "incharge";
        showToast('Switched to Center In-Charge login mode. Click Send OTP to proceed.');
      }
    });
  }

  // Export Leader Data to CSV
  const exportLeaderDataCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "=== VAN BAZAAR COLLECTIVE SELLING DIRECTORY ===\n";
    csvContent += "Batch ID,Leader Name,Phone,Location,Total Weight (KG),Status\n";
    activeListings.forEach(grp => {
      csvContent += `"${grp.id}","${grp.leaderName}","${grp.phone}","${grp.location}","${grp.totalWeight}","${grp.status}"\n`;
    });

    csvContent += "\n=== VAN BAZAAR RECENT USER LOGINS ===\n";
    csvContent += "Session ID,User Name,Phone,Role,Kendra,Auth Method,Time,Status\n";
    activeLogins.forEach(log => {
      csvContent += `"${log.id}","${log.name}","${log.phone}","${log.role}","${log.kendra}","${log.authType}","${log.time}","${log.status}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "van_bazaar_leader_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("📥 Export complete! 'van_bazaar_leader_report.csv' downloaded.");
  };

  if (btnExportLeaderData) {
    btnExportLeaderData.addEventListener('click', exportLeaderDataCSV);
  }

  // ==========================================================================
  // 5. Collective Selling Bonus Calculator
  // ==========================================================================
  const updateCalculator = () => {
    if (!calcProduceSelect || !calcWeightInput || !calcWomenInput) return;

    const selectedOption = calcProduceSelect.options[calcProduceSelect.selectedIndex];
    const mspPrice = parseFloat(selectedOption.getAttribute('data-msp')) || 35;
    const traderPrice = parseFloat(selectedOption.getAttribute('data-trader')) || 28;
    const weight = parseFloat(calcWeightInput.value) || 100;
    const womenCount = parseInt(calcWomenInput.value) || 5;

    const traderTotal = traderPrice * weight;
    const mspTotal = mspPrice * weight;
    let bonusRate = 0.05;
    if (womenCount >= 20) bonusRate = 0.10;
    else if (womenCount >= 10) bonusRate = 0.08;

    const groupBonus = mspTotal * bonusRate;
    const grandTotal = mspTotal + groupBonus;
    const netGain = grandTotal - traderTotal;
    const gainPercent = ((netGain / traderTotal) * 100).toFixed(1);

    if (resTraderPayout) resTraderPayout.textContent = `₹${Math.round(traderTotal).toLocaleString('en-IN')}`;
    if (resMspPayout) resMspPayout.textContent = `₹${Math.round(mspTotal).toLocaleString('en-IN')}`;
    if (resGroupBonus) resGroupBonus.textContent = `+₹${Math.round(groupBonus).toLocaleString('en-IN')} (${(bonusRate * 100)}% Bonus)`;
    if (resTotalIncome) resTotalIncome.textContent = `₹${Math.round(grandTotal).toLocaleString('en-IN')}`;
    if (resNetExtraGain) resNetExtraGain.textContent = `+₹${Math.round(netGain).toLocaleString('en-IN')} (+${gainPercent}% Extra Profit)`;
  };

  if (calcProduceSelect) calcProduceSelect.addEventListener('change', updateCalculator);
  if (calcWeightInput) calcWeightInput.addEventListener('input', updateCalculator);
  if (calcWomenInput) calcWomenInput.addEventListener('input', updateCalculator);

  if (btnOpenCalculator) {
    btnOpenCalculator.addEventListener('click', () => {
      calcModal.classList.add('active');
      updateCalculator();
    });
  }

  if (btnCloseCalcModal) {
    btnCloseCalcModal.addEventListener('click', () => {
      calcModal.classList.remove('active');
    });
  }

  if (btnConfirmAggregation) {
    btnConfirmAggregation.addEventListener('click', () => {
      calcModal.classList.remove('active');
      showToast('🎉 Collective batch logged! Torpa Van Kendra notified for weighing.');
    });
  }

  // ==========================================================================
  // 6. Voice Grievance & Accountability
  // ==========================================================================
  if (btnOpenGrievance) {
    btnOpenGrievance.addEventListener('click', () => {
      grievanceModal.classList.add('active');
    });
  }

  if (btnCloseGrievanceModal) {
    btnCloseGrievanceModal.addEventListener('click', () => {
      grievanceModal.classList.remove('active');
    });
  }

  if (btnRecordGrievanceVoice) {
    btnRecordGrievanceVoice.addEventListener('click', () => {
      const grievanceDetails = document.getElementById('grievanceDetails');

      if (isGrievanceRecording && grievanceRecognition) {
        try { grievanceRecognition.stop(); } catch (e) {}
        isGrievanceRecording = false;
        btnRecordGrievanceVoice.style.background = '';
        btnRecordGrievanceVoice.style.borderColor = '';
        if (recordVoiceText) recordVoiceText.textContent = '✅ Voice Note Saved (Click to record more)';
        return;
      }

      const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognitionClass) {
        // Fallback simulation for browsers without Web Speech API
        if (!isRecording) {
          isRecording = true;
          btnRecordGrievanceVoice.style.background = '#FEE2E2';
          btnRecordGrievanceVoice.style.borderColor = '#EF4444';
          if (recordVoiceText) recordVoiceText.textContent = '🔴 Recording... (Click to stop)';
          showToast('Voice recording started...');
        } else {
          isRecording = false;
          btnRecordGrievanceVoice.style.background = '';
          btnRecordGrievanceVoice.style.borderColor = '';
          if (recordVoiceText) recordVoiceText.textContent = '✅ Voice Note Saved (0:14s recorded)';
          if (grievanceDetails && !grievanceDetails.value) {
            grievanceDetails.value = "आज तोरपा केंद्र पर महुआ के लिए 35 की जगह केवल 30 रुपये दिया जा रहा था और तौल में भी 2 किलो कम दिखाया गया।";
          }
          showToast('Voice recording transcribed successfully!');
        }
        return;
      }

      try {
        if (!grievanceRecognition) {
          grievanceRecognition = new SpeechRecognitionClass();
          grievanceRecognition.continuous = false;
          grievanceRecognition.interimResults = true;
          grievanceRecognition.lang = 'hi-IN';

          grievanceRecognition.onstart = () => {
            isGrievanceRecording = true;
            btnRecordGrievanceVoice.style.background = '#FEE2E2';
            btnRecordGrievanceVoice.style.borderColor = '#EF4444';
            if (recordVoiceText) recordVoiceText.textContent = '🔴 Listening... Speak complaint in Hindi/Mundari (Click to stop)';
            showToast('🎙️ Listening... Speak your grievance now.');
          };

          grievanceRecognition.onresult = (event) => {
            let transcript = '';
            for (let i = 0; i < event.results.length; i++) {
              transcript += event.results[i][0].transcript;
            }
            if (grievanceDetails) {
              grievanceDetails.value = transcript;
            }
          };

          grievanceRecognition.onerror = (err) => {
            console.warn('Grievance recognition error:', err);
            isGrievanceRecording = false;
            btnRecordGrievanceVoice.style.background = '';
            btnRecordGrievanceVoice.style.borderColor = '';
            if (recordVoiceText) recordVoiceText.textContent = '🎙️ Tap to Record Voice Complaint';
            if (err.error === 'not-allowed') {
              showToast('🔒 Microphone permission blocked. You can also type your complaint directly.');
            }
          };

          grievanceRecognition.onend = () => {
            isGrievanceRecording = false;
            btnRecordGrievanceVoice.style.background = '';
            btnRecordGrievanceVoice.style.borderColor = '';
            if (recordVoiceText) recordVoiceText.textContent = '✅ Voice Note Saved (Click to record more)';
            showToast('✅ Grievance transcribed successfully!');
          };
        }

        grievanceRecognition.start();

      } catch (e) {
        console.error('Grievance recording error:', e);
        isGrievanceRecording = false;
      }
    });
  }

  if (grievanceForm) {
    grievanceForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const ticketId = 'VB-GRV-' + Math.floor(10000 + Math.random() * 90000);
      const phoneInput = document.getElementById('grievancePhone');
      const kendraSelect = document.getElementById('grievanceKendra');
      const catSelect = document.getElementById('grievanceCategory');
      const detailsInput = document.getElementById('grievanceDetails');

      const newGrv = {
        id: ticketId,
        collectorPhone: phoneInput ? phoneInput.value : "+91 9431X XXXXX",
        kendra: kendraSelect ? kendraSelect.value : "Torpa Van Kendra",
        category: catSelect ? catSelect.value : "General Inquiry",
        details: detailsInput ? detailsInput.value : "Voice Grievance Recorded",
        status: "Investigating by Nodal Officer",
        time: "Just now"
      };

      activeGrievances.unshift(newGrv);
      try {
        localStorage.setItem('van_bazaar_grievances', JSON.stringify(activeGrievances));
      } catch (err) {}

      renderLeaderDashboard();
      grievanceModal.classList.remove('active');
      showToast(`🛡️ Grievance registered! Ticket #${ticketId} dispatched to TRIFED Nodal Desk.`);
      grievanceForm.reset();
    });
  }

  // ==========================================================================
  // 7. Language Switcher & Multilingual UI
  // ==========================================================================
  if (btnLangSelect) {
    btnLangSelect.addEventListener('click', () => {
      langModal.classList.add('active');
    });
  }

  if (btnCloseLangModal) {
    btnCloseLangModal.addEventListener('click', () => {
      langModal.classList.remove('active');
    });
  }

  langCardOptions.forEach(card => {
    card.addEventListener('click', () => {
      langCardOptions.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const selectedCode = card.getAttribute('data-lang');
      currentLanguage = selectedCode;
      const targetVoiceLang = (selectedCode === 'mun' || selectedCode === 'ho') ? 'hi' : selectedCode;
      voiceAssistantLang = targetVoiceLang;
      updateVoiceLangTabsUI();
      populateVoiceQueries();
      applyLanguage(selectedCode);
      langModal.classList.remove('active');
      showToast(`Language switched to ${card.querySelector('h4').textContent}`);
    });
  });

  const applyLanguage = (langCode) => {
    const dict = VAN_BAZAAR_DATA.languages[langCode] || VAN_BAZAAR_DATA.languages.en;

    const navLinkHome = document.getElementById('navLinkHome');
    const navLinkPrices = document.getElementById('navLinkPrices');
    const navLinkServices = document.getElementById('navLinkServices');
    const navLinkImpact = document.getElementById('navLinkImpact');
    const navLinkContact = document.getElementById('navLinkContact');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroDesc = document.getElementById('heroDesc');
    const btnHeroGetStarted = document.getElementById('btnHeroGetStarted');
    const btnHeroListenVoice = document.getElementById('btnHeroListenVoice');
    const mspSectionTitle = document.getElementById('mspSectionTitle');

    if (currentLangLabel) currentLangLabel.textContent = dict.name ? dict.name.split(' ')[0] : 'Language';
    if (navLinkHome) navLinkHome.textContent = dict.navHome;
    if (navLinkPrices) navLinkPrices.textContent = dict.navPrices;
    if (navLinkServices) navLinkServices.textContent = dict.navSell;
    if (navLinkImpact) navLinkImpact.textContent = dict.navImpact;
    if (navLinkContact) navLinkContact.textContent = dict.navContact;
    if (heroSubtitle) heroSubtitle.textContent = dict.heroSubtitle;
    if (heroDesc) heroDesc.textContent = dict.heroDesc;
    if (btnHeroGetStarted && btnHeroGetStarted.querySelector('span') && dict.btnGetStarted) {
      btnHeroGetStarted.querySelector('span').textContent = dict.btnGetStarted;
    }
    if (btnHeroListenVoice && btnHeroListenVoice.querySelector('span') && dict.btnListen) {
      btnHeroListenVoice.querySelector('span').textContent = dict.btnListen;
    }
    if (mspSectionTitle) mspSectionTitle.textContent = dict.livePricesTitle;
    if (searchInput) searchInput.placeholder = dict.searchPlaceholder;

    renderProducts();
  };

  // ==========================================================================
  // 8. Login Portal & Interactive OTP Verification Dashboard
  // ==========================================================================
  
  // Log user logins in Leader Dashboard
  const logUserLogin = (name, phone, role, authMethod) => {
    const newLog = {
      id: "LOG-" + Math.floor(100 + Math.random() * 900),
      name: name,
      phone: phone,
      role: role,
      kendra: pendingLoginProfile.kendra || "Torpa / Khunti Central Hub",
      authType: authMethod,
      time: "Just now",
      status: "Active"
    };

    activeLogins.unshift(newLog);
    try {
      localStorage.setItem('van_bazaar_user_logins', JSON.stringify(activeLogins));
    } catch (e) {}

    renderLeaderDashboard();
  };

  // Update Nav & Profile UI for Logged-In User
  const updateLoggedInUI = (user) => {
    if (user) {
      currentLoggedUser = user;
      try {
        localStorage.setItem('van_bazaar_logged_user', JSON.stringify(user));
      } catch (e) {}

      if (btnLogin) btnLogin.style.display = 'none';
      if (userProfileMenuWrap) userProfileMenuWrap.style.display = 'inline-flex';

      const initials = user.initials || user.name.split(' ').map(w => w[0]).filter(c => /[A-Za-z]/.test(c)).slice(0, 2).join('').toUpperCase() || 'SM';
      const shortName = user.name.split(' ')[0] + ' ' + (user.name.split(' ')[1] || '');

      if (userAvatarNav) userAvatarNav.textContent = initials;
      if (userNameNav) userNameNav.textContent = shortName;
      if (userRoleNav) userRoleNav.textContent = user.roleBadge || (user.role === 'incharge' ? 'Kendra Leader' : 'SHG Collector');

      if (memberAvatarLg) memberAvatarLg.textContent = initials;
      if (memberNameDisplay) memberNameDisplay.textContent = user.name;
      if (memberKendraDisplay) memberKendraDisplay.textContent = user.kendra || "Torpa Van Dhan Vikas Kendra (Khunti)";
      if (memberRoleBadge) {
        memberRoleBadge.textContent = `🟢 Verified ${user.roleText || 'Member'} • ID: ${user.memberId || 'VD-JH-2026-8492'}`;
      }
      if (memberWalletBal) memberWalletBal.textContent = user.walletBal || "₹14,850";

      // Leader Privilege Check: ONLY In-Charge or Officer sees the Leader Desk
      const userIsLeader = user.role === 'incharge' || user.role === 'officer';
      if (btnMemberLeaderDesk) {
        btnMemberLeaderDesk.style.display = userIsLeader ? 'block' : 'none';
      }
      if (btnMemberSupportDesk) {
        btnMemberSupportDesk.style.display = userIsLeader ? 'none' : 'block';
      }

      if (btnLeaderAccess) {
        btnLeaderAccess.innerHTML = userIsLeader 
          ? '<span>👑 Leader Access <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#22C55E; margin-left:4px;" title="Verified Leader Session"></span></span>' 
          : '<span>👑 Leader Access</span>';
      }

    } else {
      currentLoggedUser = null;
      try {
        localStorage.removeItem('van_bazaar_logged_user');
      } catch (e) {}

      if (btnLogin) btnLogin.style.display = 'inline-flex';
      if (userProfileMenuWrap) userProfileMenuWrap.style.display = 'none';

      if (btnMemberLeaderDesk) btnMemberLeaderDesk.style.display = 'none';
      if (btnMemberSupportDesk) btnMemberSupportDesk.style.display = 'block';
      if (btnLeaderAccess) btnLeaderAccess.innerHTML = '<span>👑 Leader Access</span>';
    }
  };

  // OTP Countdown Timer Function
  const startOtpCountdown = (seconds = 30) => {
    if (otpTimerInterval) clearInterval(otpTimerInterval);
    let remaining = seconds;

    if (otpCountdown) otpCountdown.textContent = remaining;
    if (otpTimerWrapper) otpTimerWrapper.style.display = 'inline-block';
    if (btnResendOtp) btnResendOtp.style.display = 'none';

    otpTimerInterval = setInterval(() => {
      remaining -= 1;
      if (otpCountdown) otpCountdown.textContent = remaining;

      if (remaining <= 0) {
        clearInterval(otpTimerInterval);
        if (otpTimerWrapper) otpTimerWrapper.style.display = 'none';
        if (btnResendOtp) btnResendOtp.style.display = 'inline-block';
      }
    }, 1000);
  };

  // Sync 4 visual digit boxes with the single input value
  const syncOtpBoxes = (val = '') => {
    const clean = String(val).replace(/[^0-9]/g, '').slice(0, 4);
    for (let i = 0; i < 4; i++) {
      if (otpBoxes[i]) {
        if (i < clean.length) {
          otpBoxes[i].textContent = clean[i];
          otpBoxes[i].classList.add('filled');
        } else {
          otpBoxes[i].textContent = '-';
          otpBoxes[i].classList.remove('filled');
        }
      }
    }
  };

  // Switch to Step 1
  const showLoginStep1 = () => {
    if (loginStep1) loginStep1.style.display = 'block';
    if (loginStep2) loginStep2.style.display = 'none';
    if (loginModalTitle) loginModalTitle.textContent = "Van Bazaar Portal Login (लॉगिन पोर्टल)";
  };

  // Switch to Step 2 (OTP Dashboard)
  const showLoginStep2 = (phone) => {
    if (loginStep1) loginStep1.style.display = 'none';
    if (loginStep2) loginStep2.style.display = 'block';
    if (loginModalTitle) loginModalTitle.textContent = "🔑 OTP Verification Dashboard (ओटीपी सत्यापन)";

    if (otpTargetPhoneDisplay) otpTargetPhoneDisplay.textContent = `+91 ${phone}`;
    if (generatedOtpBadge) generatedOtpBadge.textContent = currentGeneratedOtp;
    if (btnAutoFillOtp) btnAutoFillOtp.textContent = `⚡ Auto-Fill (${currentGeneratedOtp})`;

    // Reset OTP single input and visual boxes
    if (otpSingleInput) {
      otpSingleInput.value = '';
      setTimeout(() => otpSingleInput.focus(), 150);
    }
    syncOtpBoxes('');

    startOtpCountdown(30);
    showToast(`📩 SMS sent to +91 ${phone}! Verification Code: ${currentGeneratedOtp}`);
  };

  // Open Login Modal
  if (btnLogin) {
    btnLogin.addEventListener('click', () => {
      showLoginStep1();
      loginModal.classList.add('active');
    });
  }

  if (btnCloseLoginModal) {
    btnCloseLoginModal.addEventListener('click', () => {
      loginModal.classList.remove('active');
      if (otpTimerInterval) clearInterval(otpTimerInterval);
    });
  }

  // Step 1: Send OTP Submit Action
  const handleSendOtp = (e) => {
    if (e) e.preventDefault();
    const name = loginNameInput && loginNameInput.value.trim() ? loginNameInput.value.trim() : "Sunita Munda";
    const phone = loginPhoneInput ? loginPhoneInput.value.trim() : "9431188201";
    const kendra = loginKendraSelect ? loginKendraSelect.value : "Torpa Van Dhan Vikas Kendra (Khunti)";

    if (phone.length < 10) {
      showToast('⚠️ Please enter a valid 10-digit mobile number.');
      return;
    }

    // Generate a new 4-digit OTP code
    currentGeneratedOtp = String(Math.floor(1000 + Math.random() * 9000));

    const selectedRoleText = loginRole ? loginRole.options[loginRole.selectedIndex].text : "Tribal Collector";
    const selectedRoleVal = loginRole ? loginRole.value : "collector";

    pendingLoginProfile = {
      name: name,
      phone: phone,
      role: selectedRoleVal,
      roleText: selectedRoleText,
      kendra: kendra,
      initials: name.split(' ').map(w => w[0]).filter(c => /[A-Za-z]/.test(c)).slice(0, 2).join('').toUpperCase() || 'SM'
    };

    showLoginStep2(phone);
    speakText(`ओटीपी भेजा गया है। आपका सत्यापन कोड है: ${currentGeneratedOtp.split('').join(' ')}`, `OTP bheja gaya hai. Aapka code hai: ${currentGeneratedOtp.split('').join(' ')}`, `Verification OTP sent to +91 ${phone}.`);
  };

  if (loginForm) {
    loginForm.addEventListener('submit', handleSendOtp);
  }
  if (btnSendOtpSubmit) {
    btnSendOtpSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      handleSendOtp(e);
    });
  }

  // Edit Phone / Back to Step 1
  if (btnEditLoginPhone) {
    btnEditLoginPhone.addEventListener('click', showLoginStep1);
  }
  if (btnBackToLoginStep1) {
    btnBackToLoginStep1.addEventListener('click', showLoginStep1);
  }

  // Direct Typing & Keyboard Sync in Single OTP Input
  if (otpSingleInput) {
    otpSingleInput.addEventListener('input', (e) => {
      const clean = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
      e.target.value = clean;
      syncOtpBoxes(clean);
    });

    otpSingleInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (btnVerifyOtpSubmit) btnVerifyOtpSubmit.click();
      }
    });

    otpSingleInput.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasteData = (e.clipboardData || window.clipboardData).getData('text').replace(/[^0-9]/g, '').slice(0, 4);
      otpSingleInput.value = pasteData;
      syncOtpBoxes(pasteData);
    });
  }

  // Auto-Fill Button in SMS Alert Banner
  if (btnAutoFillOtp) {
    btnAutoFillOtp.addEventListener('click', () => {
      if (otpSingleInput) {
        otpSingleInput.value = currentGeneratedOtp;
        syncOtpBoxes(currentGeneratedOtp);
      }
      showToast(`⚡ OTP Code ${currentGeneratedOtp} auto-filled!`);
      if (btnVerifyOtpSubmit) btnVerifyOtpSubmit.focus();
    });
  }

  // On-Screen Touch Keypad for OTP
  otpKeyBtns.forEach(key => {
    key.addEventListener('click', () => {
      const digit = key.getAttribute('data-digit');
      const action = key.getAttribute('data-action');
      let currentVal = otpSingleInput ? otpSingleInput.value : '';

      if (digit !== null) {
        if (currentVal.length < 4) {
          currentVal += digit;
          if (otpSingleInput) otpSingleInput.value = currentVal;
          syncOtpBoxes(currentVal);
        }
      } else if (action === 'clear') {
        if (otpSingleInput) otpSingleInput.value = '';
        syncOtpBoxes('');
        if (otpSingleInput) otpSingleInput.focus();
      } else if (action === 'backspace') {
        if (currentVal.length > 0) {
          currentVal = currentVal.slice(0, -1);
          if (otpSingleInput) otpSingleInput.value = currentVal;
          syncOtpBoxes(currentVal);
        }
      }
    });
  });

  // Resend OTP Button
  if (btnResendOtp) {
    btnResendOtp.addEventListener('click', () => {
      currentGeneratedOtp = String(Math.floor(1000 + Math.random() * 9000));
      if (generatedOtpBadge) generatedOtpBadge.textContent = currentGeneratedOtp;
      if (btnAutoFillOtp) btnAutoFillOtp.textContent = `⚡ Auto-Fill (${currentGeneratedOtp})`;
      if (otpSingleInput) {
        otpSingleInput.value = '';
        syncOtpBoxes('');
      }
      startOtpCountdown(30);
      showToast(`🔄 New OTP sent! Code: ${currentGeneratedOtp}`);
      speakText(`नया ओटीपी भेजा गया है: ${currentGeneratedOtp.split('').join(' ')}`, `Naya OTP bheja gaya hai: ${currentGeneratedOtp.split('').join(' ')}`);
    });
  }

  // Voice Read-Out OTP Button
  if (btnVoiceOtpSpeak) {
    btnVoiceOtpSpeak.addEventListener('click', () => {
      speakText(`आपका ओटीपी कोड है: ${currentGeneratedOtp.split('').join(' ')}`, `Aapka OTP code hai: ${currentGeneratedOtp.split('').join(' ')}`, `Your security OTP code is ${currentGeneratedOtp.split('').join(' ')}`);
    });
  }

  // Verify & Submit OTP
  if (btnVerifyOtpSubmit) {
    btnVerifyOtpSubmit.addEventListener('click', () => {
      const enteredOtp = otpSingleInput ? otpSingleInput.value.trim() : '';

      if (enteredOtp.length < 4) {
        showToast('⚠️ Please enter all 4 digits of the OTP.');
        if (otpSingleInput) {
          otpSingleInput.style.borderColor = '#EF4444';
          setTimeout(() => { otpSingleInput.style.borderColor = ''; }, 1500);
          otpSingleInput.focus();
        }
        return;
      }

      // Check OTP against generated code (or master bypass 1234, 4829)
      if (enteredOtp === currentGeneratedOtp || enteredOtp === '1234' || enteredOtp === '4829') {
        const userObj = {
          name: pendingLoginProfile.name || "Sunita Munda",
          phone: pendingLoginProfile.phone || "+91 94311 88201",
          role: pendingLoginProfile.role || (loginRole ? loginRole.value : "collector"),
          roleText: pendingLoginProfile.roleText || "Tribal Collector / Mahila SHG Member",
          kendra: pendingLoginProfile.kendra || "Torpa Van Dhan Vikas Kendra (Khunti)",
          memberId: "VD-JH-2026-" + Math.floor(1000 + Math.random() * 9000),
          walletBal: "₹14,850",
          initials: (pendingLoginProfile.name || "SM").split(' ').map(w => w[0]).filter(c => /[A-Za-z]/.test(c)).slice(0, 2).join('').toUpperCase() || "SM",
          authMethod: "OTP Verified",
          loginTime: "Just now"
        };

        updateLoggedInUI(userObj);
        logUserLogin(userObj.name, userObj.phone, userObj.roleText, "OTP Verified");

        loginModal.classList.remove('active');
        if (otpTimerInterval) clearInterval(otpTimerInterval);

        speakText(`${userObj.name.split(' ')[0]} जी, ओटीपी सत्यापित हुआ। वन बाज़ार पोर्टल में आपका स्वागत है।`, `OTP satyapit hua. Welcome ${userObj.name.split(' ')[0]} ji.`);
        showToast(`🎉 Login Successful! Welcome ${userObj.name}.`);

        // Open Member Portal after brief delay
        setTimeout(() => {
          if (userMemberModal) userMemberModal.classList.add('active');
        }, 600);

      } else {
        showToast('❌ Incorrect OTP code. Please enter the code shown in the SMS banner or click Auto-Fill.');
        if (otpSingleInput) {
          otpSingleInput.style.borderColor = '#EF4444';
          otpSingleInput.style.background = '#FEE2E2';
          setTimeout(() => {
            otpSingleInput.style.borderColor = '';
            otpSingleInput.style.background = '';
          }, 2000);
          otpSingleInput.focus();
        }
      }
    });
  }

  // Voice Biometric Login shortcut
  if (btnVoiceOtpLogin) {
    btnVoiceOtpLogin.addEventListener('click', () => {
      speakText("वॉयस पासफ़्रेज़ सत्यापित हुआ। खूंटी केंद्र लॉगिन सफल।", "Voice Passphrase Verified. Khunti Center Login Successful.");
      
      const userObj = {
        name: "Sunita Munda (सुनीता मुंडा)",
        phone: "+91 94311 88201",
        role: "collector",
        roleText: "Tribal Collector / Mahila SHG Member",
        kendra: "Torpa Van Dhan Vikas Kendra (Khunti)",
        memberId: "VD-JH-2026-8492",
        walletBal: "₹14,850",
        initials: "SM",
        authMethod: "Voice Biometric",
        loginTime: "Just now"
      };

      updateLoggedInUI(userObj);
      logUserLogin(userObj.name, userObj.phone, userObj.roleText, "Voice Biometric");

      setTimeout(() => {
        loginModal.classList.remove('active');
        showToast('🔓 Voice Biometric Login Successful! Welcome Sunita Munda.');
        if (userMemberModal) userMemberModal.classList.add('active');
      }, 1000);
    });
  }

  // User Profile Menu & Member Portal Actions
  if (btnUserMenuToggle) {
    btnUserMenuToggle.addEventListener('click', () => {
      if (userMemberModal) userMemberModal.classList.add('active');
    });
  }

  if (btnCloseUserMemberModal) {
    btnCloseUserMemberModal.addEventListener('click', () => {
      if (userMemberModal) userMemberModal.classList.remove('active');
    });
  }

  if (btnMemberStartGroup) {
    btnMemberStartGroup.addEventListener('click', () => {
      if (userMemberModal) userMemberModal.classList.remove('active');
      const sSection = document.getElementById('services');
      if (sSection) sSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (btnMemberCheckPrices) {
    btnMemberCheckPrices.addEventListener('click', () => {
      if (userMemberModal) userMemberModal.classList.remove('active');
      const pSection = document.getElementById('prices');
      if (pSection) pSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (btnMemberRaiseGrievance) {
    btnMemberRaiseGrievance.addEventListener('click', () => {
      if (userMemberModal) userMemberModal.classList.remove('active');
      if (grievanceModal) grievanceModal.classList.add('active');
    });
  }

  if (btnMemberLeaderDesk) {
    btnMemberLeaderDesk.addEventListener('click', () => {
      if (userMemberModal) userMemberModal.classList.remove('active');
      if (leaderModal) {
        leaderModal.classList.add('active');
        renderLeaderDashboard();
      }
    });
  }

  if (btnMemberSupportDesk) {
    btnMemberSupportDesk.addEventListener('click', () => {
      showToast('📞 Torpa Kendra Center In-Charge: +91 94313 66420 (Helpline Open 8 AM - 5 PM)');
    });
  }

  if (btnLogoutUser) {
    btnLogoutUser.addEventListener('click', () => {
      if (userMemberModal) userMemberModal.classList.remove('active');
      updateLoggedInUI(null);
      speakText("आप वन बाज़ार पोर्टल से लॉगआउट हो गए हैं।", "Aap Van Bazaar portal se logout ho gaye hain.", "You have successfully logged out from Van Bazaar.");
      showToast('👋 Logged out successfully. See you soon!');
    });
  }

  // Check existing session on load
  if (currentLoggedUser) {
    updateLoggedInUI(currentLoggedUser);
  }

  // ==========================================================================
  // 9. Footer Action Shortcuts
  // ==========================================================================
  if (footerBtnVoice) footerBtnVoice.addEventListener('click', openVoiceAssistant);
  if (footerBtnCalc) footerBtnCalc.addEventListener('click', () => {
    calcModal.classList.add('active');
    updateCalculator();
  });
  if (footerBtnGrievance) footerBtnGrievance.addEventListener('click', () => {
    grievanceModal.classList.add('active');
  });
  if (footerBtnKendras) footerBtnKendras.addEventListener('click', () => {
    showToast('📍 4 Pilot Kendras Active in Khunti & West Singhbhum (Open 8 AM - 5 PM)');
  });

  // Modal Backdrop Click to Close
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      }
    });
  });

  // ==========================================================================
  // 10. Intersection Observer (Fade-Up & Number Counters)
  // ==========================================================================
  const fadeElements = document.querySelectorAll('.fade-up');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach(el => revealObserver.observe(el));

  // Animated Counters
  const counterElements = document.querySelectorAll('.stat-number');
  let countersStarted = false;

  const runCounters = () => {
    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target')) || 0;
      const suffix = counter.getAttribute('data-suffix') || '';
      const prefix = counter.getAttribute('data-prefix') || '';
      const duration = 1800;
      const startTime = performance.now();

      const animateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeProgress * target);

        counter.textContent = `${prefix}${currentCount}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          counter.textContent = `${prefix}${target}${suffix}`;
        }
      };

      requestAnimationFrame(animateCount);
    });
  };

  const statsSection = document.querySelector('.impact-section');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          runCounters();
        }
      });
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  }

  // ==========================================================================
  // 11. Toast Helper Function
  // ==========================================================================
  function showToast(message) {
    if (!toastMsg || !toastText) return;
    toastText.textContent = message;
    toastMsg.classList.add('show');

    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 4000);
  }

  // Initial Initialization
  renderProducts();
  renderCollectiveListings();
  updateFormEstimate();
  renderLeaderDashboard();
});
