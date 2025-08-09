// UselessForm.exe - The Ultimate Troll Form
// Features: Reverse logic, running buttons, cursor following, and pure chaos

class TrollForm {
    constructor() {
        this.initializeElements();
        this.setupEventListeners();
        this.startTrollFeatures();
        this.progress = 100;
        this.emojiRainActive = false;
        this.fakeCursors = [];
        this.selfDestructTimer = null;
        this.realPhotoData = null;
        this.realFormData = {};
        this.startTime = Date.now();
        
        // New chaotic features
        this.autoCorrectActive = false;
        this.selfPraisingButton = null;
        this.aiAssistant = null;
        this.backgroundRoasts = [];
        this.genieMode = false;
        this.autoCleanMode = false;
        this.fakeHackerMode = false;
        this.eyeTestMode = false;
        this.imposterLabels = false;
        this.abductionMode = false;
        this.meditationMode = false;
        this.slotMachineInputs = false;
        this.meltingUI = false;
        this.antiBackspacePolice = false;
        this.mouseAccuracyChallenge = false;
        this.microphoneTroll = false;
        this.infiniteFormSection = false;
        this.voidScrollTrap = false;
        this.fakePremiumUnlock = false;
        this.destructionButton = false;
        
        // Load customizations from URL parameters
        this.loadCustomizations();
        
        // Initialize new chaotic features
        this.initializeChaoticFeatures();
    }

    // Initialize all the new chaotic features
    initializeChaoticFeatures() {
        this.setupAutoCorrect();
        this.setupSelfPraisingButton();
        this.setupAIAssistant();
        this.startBackgroundRoasts();
        this.setupGenieMode();
        this.setupAutoCleanMode();
        this.setupFakeHackerMode();
        this.setupEyeTestMode();
        this.setupImposterLabels();
        this.setupAbductionMode();
        this.setupMeditationMode();
        this.setupSlotMachineInputs();
        this.setupMeltingUI();
        this.setupAntiBackspacePolice();
        this.setupMouseAccuracyChallenge();
        this.setupMicrophoneTroll();
        this.setupInfiniteFormSection();
        this.setupVoidScrollTrap();
        this.setupFakePremiumUnlock();
        this.setupDestructionButton();
    }

    // 1. Auto-Correct with a Mind of Its Own
    setupAutoCorrect() {
        const autoCorrectMap = {
            'yes': 'nah',
            'hello': 'yo grandma',
            'good': 'amazing',
            'bad': 'terrible',
            'I is good': 'I are greatest',
            'thank you': 'you\'re welcome, peasant',
            'please': 'pretty please with sprinkles',
            'help': 'figure it out yourself',
            'sorry': 'not sorry enough',
            'love': 'hate',
            'happy': 'miserable',
            'sad': 'ecstatic'
        };

        // Apply auto-correct to all text inputs
        const textInputs = document.querySelectorAll('input[type="text"], input[type="email"]');
        textInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                const value = e.target.value;
                for (const [original, replacement] of Object.entries(autoCorrectMap)) {
                    if (value.toLowerCase().includes(original.toLowerCase())) {
                        e.target.value = value.replace(new RegExp(original, 'gi'), replacement);
                        this.showNotification('Auto-correct: Making your text worse! 😈', 'info');
                        break;
                    }
                }
            });
        });
    }

    // 2. Self-Praising Button - Integrated into submit button
    setupSelfPraisingButton() {
        this.submitBtn.addEventListener('click', () => {
            if (Math.random() < 0.3) { // 30% chance
                const originalText = this.submitBtn.innerHTML;
                this.submitBtn.innerHTML = 'You\'re unworthy. Try again later.';
                this.submitBtn.style.background = '#ff4444';
                setTimeout(() => {
                    this.submitBtn.innerHTML = originalText;
                    this.submitBtn.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7d1)';
                }, 2000);
            }
        });
    }

    // 3. AI Assistant That Hates You - Integrated into voice input
    setupAIAssistant() {
        // Add AI responses to voice input
        const aiResponses = [
            'No. Figure it out, Einstein.',
            'I would help, but I\'m busy doing nothing.',
            'That\'s a stupid question.',
            'Have you tried turning it off and on again? Oh wait, that\'s IT support.',
            'I\'m not paid enough to deal with this.',
            'Error 404: Give a damn not found.',
            'Maybe try using your brain for once?',
            'I\'m an AI, not your personal assistant.',
            'That question made me dumber.',
            'I\'d rather be doing literally anything else.'
        ];
        
        // Override voice input to show AI responses
        this.voiceInputTroll = (e) => {
            e.preventDefault();
            this.playRandomSound();
            
            const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
            this.voiceResult.textContent = `AI Assistant: ${response}`;
            this.updateIntelligenceMeter('sarcasm', -5);
        };
    }

    // 4. Background Roasts
    startBackgroundRoasts() {
        const roasts = [
            'Still not done? Pathetic.',
            'Your typing speed is concerning.',
            'Mom\'s faster than this.',
            'Are you typing with your feet?',
            'This is taking longer than my patience.',
            'I\'ve seen snails move faster.',
            'Your form-filling skills are questionable.',
            'Did you forget how to type?',
            'This is painful to watch.',
            'Are you doing this on purpose?'
        ];
        
        setInterval(() => {
            if (Math.random() < 0.3) {
                const roast = document.createElement('div');
                roast.className = 'background-roast';
                roast.textContent = roasts[Math.floor(Math.random() * roasts.length)];
                roast.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * (window.innerWidth - 200)}px;
                    top: ${Math.random() * (window.innerHeight - 50)}px;
                    background: rgba(255, 107, 107, 0.9);
                    color: white;
                    padding: 10px 15px;
                    border-radius: 20px;
                    font-weight: bold;
                    z-index: 999;
                    animation: float 3s ease-in-out;
                    pointer-events: none;
                `;
                
                document.body.appendChild(roast);
                this.backgroundRoasts.push(roast);
                
                setTimeout(() => {
                    roast.remove();
                    this.backgroundRoasts = this.backgroundRoasts.filter(r => r !== roast);
                }, 3000);
            }
        }, 8000);
    }

    // 5. Genie Mode - Integrated into theme switcher
    setupGenieMode() {
        // Add genie mode to theme switcher
        const genieBtn = document.createElement('button');
        genieBtn.className = 'theme-btn';
        genieBtn.setAttribute('data-theme', 'genie');
        genieBtn.textContent = '🧞‍♂️ Genie';
        this.themeSwitcher.appendChild(genieBtn);
        
        genieBtn.addEventListener('click', () => {
            this.genieMode = !this.genieMode;
            if (this.genieMode) {
                document.body.style.filter = 'invert(1)';
                this.showNotification('Genie Mode: I do the opposite of what you want!', 'info');
            } else {
                document.body.style.filter = '';
                this.showNotification('Genie Mode: Back to normal (boring)!', 'info');
            }
        });
    }

    // 6. Auto-Clean Mode - Integrated into form inputs
    setupAutoCleanMode() {
        // Auto-clean inputs randomly
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every 5 seconds
                const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
                inputs.forEach(input => {
                    if (input.value && Math.random() < 0.3) {
                        input.value = '';
                        this.showNotification('Auto-Clean: We don\'t save garbage.', 'info');
                    }
                });
            }
        }, 5000);
    }

    // 7. Fake Hacker Mode - Integrated into captcha
    setupFakeHackerMode() {
        // Add hacker mode to captcha button
        this.captchaBtn.addEventListener('click', (e) => {
            if (Math.random() < 0.2) { // 20% chance
                e.preventDefault();
                this.fakeHackerMode = true;
                document.body.style.background = '#000';
                document.body.style.color = '#00ff00';
                
                const terminal = document.createElement('div');
                terminal.id = 'hackerTerminal';
                terminal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #000;
                    color: #00ff00;
                    font-family: 'Courier New', monospace;
                    padding: 20px;
                    z-index: 10000;
                    overflow: auto;
                `;
                
                const messages = [
                    'Initializing hack sequence...',
                    'Bypassing security protocols...',
                    'Accessing mainframe...',
                    'Downloading classified data...',
                    'You\'ve been hacked by Grandma\'s cookies gang!',
                    'All your data belongs to us now!',
                    'Just kidding! This was all fake! 😂'
                ];
                
                let i = 0;
                const typeMessage = () => {
                    if (i < messages.length) {
                        terminal.innerHTML += messages[i] + '<br>';
                        terminal.scrollTop = terminal.scrollHeight;
                        i++;
                        setTimeout(typeMessage, 1000);
                    } else {
                        setTimeout(() => {
                            terminal.remove();
                            document.body.style.background = '';
                            document.body.style.color = '';
                            this.fakeHackerMode = false;
                        }, 3000);
                    }
                };
                
                document.body.appendChild(terminal);
                typeMessage();
            }
        });
    }

    // 8. Eye Test Mode - Integrated into scrolling
    setupEyeTestMode() {
        // Eye test mode activates on scroll
        document.addEventListener('scroll', () => {
            if (Math.random() < 0.1) { // 10% chance on scroll
                const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
                const fontSize = Math.max(8, 16 - scrollPercent * 8);
                const blur = scrollPercent * 3;
                document.body.style.fontSize = fontSize + 'px';
                document.body.style.filter = `blur(${blur}px)`;
                
                if (scrollPercent > 0.8) {
                    this.showNotification('Congrats. You\'re legally blind now.', 'error');
                }
                
                setTimeout(() => {
                    document.body.style.fontSize = '';
                    document.body.style.filter = '';
                }, 3000);
            }
        });
    }

    // 9. Imposter Field Labels - Integrated into form labels
    setupImposterLabels() {
        // Randomly change labels
        setInterval(() => {
            if (Math.random() < 0.05) { // 5% chance every 10 seconds
                const labels = document.querySelectorAll('.label');
                const fakeLabels = [
                    'Phone Number',
                    'Social Security',
                    'Bank Account',
                    'Password',
                    'Credit Card',
                    'Delete All',
                    'Spam Friends',
                    'Sell Data'
                ];
                
                labels.forEach((label, index) => {
                    if (!label.dataset.originalText) {
                        label.dataset.originalText = label.textContent;
                    }
                    label.textContent = fakeLabels[index % fakeLabels.length];
                });
                
                setTimeout(() => {
                    labels.forEach(label => {
                        if (label.dataset.originalText) {
                            label.textContent = label.dataset.originalText;
                        }
                    });
                }, 3000);
            }
        }, 10000);
    }

    // 10. Abduction Mode - Integrated into NO button
    setupAbductionMode() {
        // Add abduction mode to NO button
        this.noBtn.addEventListener('click', () => {
            if (Math.random() < 0.3) { // 30% chance
                this.abductionMode = true;
                
                // UFO sound effect (simulated)
                this.playRandomSound();
                
                // Beam up effect
                document.body.style.transition = 'all 3s ease-in-out';
                document.body.style.transform = 'scale(0.1) translateY(-100vh)';
                document.body.style.opacity = '0';
                
                setTimeout(() => {
                    document.body.style.transform = '';
                    document.body.style.opacity = '';
                    this.showNotification('You\'ve been returned.', 'info');
                    this.abductionMode = false;
                }, 3000);
            }
        });
    }

    // 11. Meditation Mode
    setupMeditationMode() {
        let meditationTimer = null;
        
        const startMeditation = () => {
            if (meditationTimer) return;
            
            this.showNotification('You seem stressed. Let\'s meditate.', 'info');
            
            // Disable all inputs
            const inputs = document.querySelectorAll('input, button, textarea');
            inputs.forEach(input => input.disabled = true);
            
            // Play wind chime sound (simulated)
            this.playRandomSound();
            
            // Meditation overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                color: white;
                font-size: 2rem;
            `;
            overlay.innerHTML = '🧘‍♂️ Meditating... Please wait...';
            document.body.appendChild(overlay);
            
            meditationTimer = setTimeout(() => {
                overlay.remove();
                inputs.forEach(input => input.disabled = false);
                this.showNotification('Meditation complete. You\'re still stressed.', 'info');
                meditationTimer = null;
            }, 20000);
        };
        
        // Start meditation after 10 seconds of form filling
        setTimeout(startMeditation, 10000);
    }

    // 12. Slot Machine Inputs - Integrated into keyboard test
    setupSlotMachineInputs() {
        const celebrities = [
            'Brad Pitt',
            'Taylor Swift',
            'Elon Musk',
            'Beyoncé',
            'Tom Hanks',
            'Lady Gaga',
            'Johnny Depp',
            'Adele',
            'Leonardo DiCaprio',
            'Rihanna'
        ];
        
        // Add slot machine effect to keyboard test input
        this.keyboardTest.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && Math.random() < 0.3) { // 30% chance
                e.preventDefault();
                const originalValue = this.keyboardTest.value;
                
                // Slot machine effect
                let spins = 0;
                const spinInterval = setInterval(() => {
                    this.keyboardTest.value = celebrities[Math.floor(Math.random() * celebrities.length)];
                    spins++;
                    
                    if (spins > 10) {
                        clearInterval(spinInterval);
                        this.keyboardTest.value = celebrities[Math.floor(Math.random() * celebrities.length)];
                        this.showNotification('🎰 Jackpot! You\'re now a celebrity!', 'info');
                    }
                }, 100);
            }
        });
    }

    // 13. Melting UI - Integrated into mouse movement
    setupMeltingUI() {
        // Melting UI activates randomly on mouse movement
        document.addEventListener('mousemove', (e) => {
            if (Math.random() < 0.01) { // 1% chance on mouse move
                const elements = document.querySelectorAll('.form-group, .input-field, .submit-btn');
                elements.forEach(element => {
                    const rect = element.getBoundingClientRect();
                    const distance = Math.sqrt(
                        Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
                        Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
                    );
                    
                    if (distance < 100) {
                        element.style.transition = 'all 0.3s ease';
                        element.style.transform = `translateY(${Math.min(50, 100 - distance)}px)`;
                        element.style.opacity = Math.max(0.3, (100 - distance) / 100);
                        
                        setTimeout(() => {
                            element.style.transform = '';
                            element.style.opacity = '';
                        }, 2000);
                    }
                });
            }
        });
    }

    // 14. Anti-Backspace Police - Integrated into all inputs
    setupAntiBackspacePolice() {
        // Anti-backspace police activates randomly
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && e.target.tagName === 'INPUT' && Math.random() < 0.2) { // 20% chance
                e.preventDefault();
                const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                const newLetters = Array.from({length: 5}, () => 
                    randomLetters[Math.floor(Math.random() * randomLetters.length)]
                ).join('');
                
                e.target.value += newLetters;
                this.showNotification('No regrets. No going back.', 'error');
            }
        });
    }

    // 15. Mouse Accuracy Challenge - Integrated into form interactions
    setupMouseAccuracyChallenge() {
        // Mouse accuracy challenge activates randomly
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every 30 seconds
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * (window.innerWidth - 20)}px;
                    top: ${Math.random() * (window.innerHeight - 20)}px;
                    width: 5px;
                    height: 5px;
                    z-index: 10000;
                    cursor: pointer;
                `;
                
                checkbox.addEventListener('mouseover', () => {
                    checkbox.style.left = Math.random() * (window.innerWidth - 20) + 'px';
                    checkbox.style.top = Math.random() * (window.innerHeight - 20) + 'px';
                });
                
                checkbox.addEventListener('change', () => {
                    checkbox.remove();
                    this.showNotification('Reflexes of a sloth.', 'error');
                });
                
                document.body.appendChild(checkbox);
                
                setTimeout(() => {
                    if (checkbox.parentNode) {
                        checkbox.remove();
                        this.showNotification('Too slow!', 'error');
                    }
                }, 5000);
            }
        }, 30000);
    }

    // 16. Microphone Troll - Integrated into voice input
    setupMicrophoneTroll() {
        const trollResponses = [
            'Did you just mumble "potato salad"?',
            'Sorry, couldn\'t understand your silence.',
            'I heard you say "I love pineapple pizza"',
            'Your voice sounds like a dying goat.',
            'Did you just burp? That\'s not a valid input.',
            'I think you said "help me" but I\'m not sure.',
            'Your accent is... interesting.',
            'Did you just cough? That\'s not a word.',
            'I heard "banana" but that makes no sense.',
            'Your voice is breaking my AI brain.'
        ];
        
        // Add microphone troll responses to voice input
        this.voiceBtn.addEventListener('click', () => {
            if (Math.random() < 0.4) { // 40% chance
                const response = trollResponses[Math.floor(Math.random() * trollResponses.length)];
                this.voiceResult.textContent = response;
                this.showNotification('Microphone troll activated!', 'info');
            }
        });
    }

    // 17. Form Section That Never Ends - Integrated into terms section
    setupInfiniteFormSection() {
        // Add infinite questions to terms section
        const infiniteQuestions = [
            'Question 1: Why are you still reading this?',
            'Question 2: Do you have nothing better to do?',
            'Question 3: Seriously, stop scrolling.',
            'Question 4: You\'re very persistent.',
            'Question 5: This is getting ridiculous.',
            'Question 6: You have too much time on your hands.',
            'Question 7: Are you still here?',
            'Question 8: Fine, keep going if you want.',
            'Question 9: This is the last one... just kidding!',
            'Question 10: You must really like forms.'
        ];
        
        // Add infinite questions to terms content
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every 15 seconds
                const randomQuestion = infiniteQuestions[Math.floor(Math.random() * infiniteQuestions.length)];
                this.termsContent.innerHTML += `<p style="color: #ff6b6b; font-weight: bold;">${randomQuestion}</p>`;
            }
        }, 15000);
    }

    // 18. Fall Into the Void Scroll Trap - Integrated into scrolling
    setupVoidScrollTrap() {
        // Void scroll trap activates on deep scrolling
        document.addEventListener('scroll', () => {
            const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            
            if (scrollPercent > 0.8 && Math.random() < 0.1) { // 10% chance when scrolling deep
                document.body.style.transform = `scale(${1 - scrollPercent * 0.5})`;
                document.body.style.opacity = 1 - scrollPercent * 0.5;
                
                if (scrollPercent > 0.95) {
                    this.showNotification('You\'ve scrolled beyond logic.', 'error');
                }
                
                setTimeout(() => {
                    document.body.style.transform = '';
                    document.body.style.opacity = '';
                }, 3000);
            }
        });
    }

    // 19. Fake Premium Unlock - Integrated into share button
    setupFakePremiumUnlock() {
        // Add fake premium unlock to share button
        this.shareBtn.addEventListener('click', () => {
            if (Math.random() < 0.3) { // 30% chance
                this.fakePremiumUnlock = true;
                this.showNotification('You now have ads!', 'error');
                
                // Add fake ads
                const ad = document.createElement('div');
                ad.innerHTML = `
                    <div style="background: #ff6b6b; color: white; padding: 20px; text-align: center; margin: 10px 0;">
                        <h3>🔥 HOT DEALS! 🔥</h3>
                        <p>Buy our premium useless features for $99.99!</p>
                        <p>Limited time offer: Get 0% off!</p>
                    </div>
                `;
                
                this.form.insertBefore(ad, this.form.firstChild);
                
                setTimeout(() => {
                    ad.remove();
                }, 5000);
            }
        });
    }

    // 20. Destruction Button - Integrated into submit button
    setupDestructionButton() {
        // Add destruction effect to submit button
        this.submitBtn.addEventListener('click', () => {
            if (Math.random() < 0.1) { // 10% chance
                this.destructionButton = true;
                
                // Explosion effect
                document.body.style.transition = 'all 0.5s ease-in-out';
                document.body.style.transform = 'scale(1.2) rotate(5deg)';
                document.body.style.filter = 'brightness(2)';
                
                // Play explosion sound
                this.playRandomSound();
                
                setTimeout(() => {
                    document.body.style.transform = 'scale(0.1) rotate(360deg)';
                    document.body.style.opacity = '0';
                    
                    setTimeout(() => {
                        this.showNotification('Too late. You broke the internet.', 'error');
                        document.body.style.transform = '';
                        document.body.style.opacity = '';
                        document.body.style.filter = '';
                        this.destructionButton = false;
                    }, 1000);
                }, 500);
            }
        });
    }

    // Load customizations from URL parameters
    loadCustomizations() {
        const urlParams = new URLSearchParams(window.location.search);
        
        // Custom title
        if (urlParams.get('title')) {
            this.mainTitle.textContent = decodeURIComponent(urlParams.get('title'));
        }
        
        // Custom subtitle
        if (urlParams.get('subtitle')) {
            this.subtitle.textContent = decodeURIComponent(urlParams.get('subtitle'));
        }
        
        // Custom theme
        if (urlParams.get('theme')) {
            const theme = urlParams.get('theme');
            document.body.className = '';
            if (['spy', 'rainbow', 'chaos'].includes(theme)) {
                document.body.classList.add(`${theme}-mode`);
            }
        }
        
        // Custom form owner
        if (urlParams.get('owner')) {
            this.formOwner = decodeURIComponent(urlParams.get('owner'));
        }
    }

    // Collect real form data (for potential database storage)
    collectRealFormData() {
        const realData = {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            formOwner: this.formOwner || 'Unknown',
            realName: this.nameInput.dataset.originalValue || this.nameInput.value,
            realEmail: this.emailInput.dataset.originalValue || this.emailInput.value,
            realAge: this.ageInput.dataset.originalValue || this.ageInput.value,
            realKeyboardInput: this.keyboardTest.dataset.originalValue || this.keyboardTest.value,
            voiceInput: this.voiceResult.textContent,
            photoData: this.realPhotoData,
            intelligenceMetrics: {
                sarcasm: this.sarcasmValue.textContent,
                accuracy: this.accuracyValue.textContent,
                patience: this.patienceValue.textContent
            },
            interactions: {
                progress: this.progress,
                themeUsed: document.body.className,
                timeSpent: Date.now() - this.startTime
            }
        };
        
        this.realFormData = realData;
        return realData;
    }

    // Generate shareable URL
    generateShareableURL() {
        const baseUrl = window.location.origin + window.location.pathname;
        const params = new URLSearchParams();
        
        if (this.formOwner) {
            params.set('owner', this.formOwner);
        }
        
        if (this.mainTitle.textContent !== 'UselessForm.exe') {
            params.set('title', this.mainTitle.textContent);
        }
        
        if (this.subtitle.textContent !== 'The Ultimate Troll Form') {
            params.set('subtitle', this.subtitle.textContent);
        }
        
        const currentTheme = document.body.className;
        if (currentTheme && currentTheme !== '') {
            params.set('theme', currentTheme.replace('-mode', ''));
        }
        
        return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
    }

    // Show share dialog
    showShareDialog() {
        const shareUrl = this.generateShareableURL();
        const shareText = `Check out this amazing form: ${shareUrl}`;
        
        const shareDialog = document.createElement('div');
        shareDialog.className = 'share-dialog';
        shareDialog.innerHTML = `
            <div class="share-content">
                <h3>Share Your Troll Form! 🎪</h3>
                <p>Share this link with your friends:</p>
                <input type="text" value="${shareUrl}" readonly class="share-url">
                <div class="share-buttons">
                    <button class="copy-btn">Copy Link</button>
                    <button class="close-btn">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(shareDialog);
        
        // Copy functionality
        shareDialog.querySelector('.copy-btn').addEventListener('click', () => {
            navigator.clipboard.writeText(shareUrl).then(() => {
                this.showNotification('Link copied to clipboard!', 'info');
            });
        });
        
        // Close functionality
        shareDialog.querySelector('.close-btn').addEventListener('click', () => {
            shareDialog.remove();
        });
    }

    initializeElements() {
        // Main elements
        this.form = document.getElementById('trollForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.noBtn = document.getElementById('noBtn');
        this.progressFill = document.getElementById('progressFill');
        this.progressText = document.getElementById('progressText');
        this.mainTitle = document.getElementById('mainTitle');
        this.subtitle = document.getElementById('subtitle');
        
        // Input fields
        this.nameInput = document.getElementById('name');
        this.ageInput = document.getElementById('age');
        this.emailInput = document.getElementById('email');
        
        // Face capture
        this.camera = document.getElementById('camera');
        this.canvas = document.getElementById('canvas');
        this.captureBtn = document.getElementById('captureBtn');
        this.capturedImage = document.getElementById('capturedImage');
        this.donkeyImage = document.getElementById('donkeyImage');
        this.captureResult = document.getElementById('captureResult');
        
        // Voice input
        this.voiceBtn = document.getElementById('voiceBtn');
        this.voiceResult = document.getElementById('voiceResult');
        this.recognition = null;
        
        // Keyboard test
        this.keyboardTest = document.getElementById('keyboardTest');
        
        // Captcha
        this.captchaGrid = document.getElementById('captchaGrid');
        this.captchaBtn = document.getElementById('captchaBtn');
        
        // Terms
        this.termsContent = document.getElementById('termsContent');
        this.agreeBtn = document.getElementById('agreeBtn');
        
        // Theme switcher
        this.themeSwitcher = document.getElementById('themeSwitcher');
        this.shareBtn = document.getElementById('shareBtn');
        
        // Intelligence meter
        this.sarcasmMeter = document.getElementById('sarcasmMeter');
        this.sarcasmValue = document.getElementById('sarcasmValue');
        this.accuracyMeter = document.getElementById('accuracyMeter');
        this.accuracyValue = document.getElementById('accuracyValue');
        this.patienceMeter = document.getElementById('patienceMeter');
        this.patienceValue = document.getElementById('patienceValue');
        
        // Modals and popups
        this.loadingSpinner = document.getElementById('loadingSpinner');
        this.spinnerText = document.getElementById('spinnerText');
        this.resultModal = document.getElementById('resultModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalMessage = document.getElementById('modalMessage');
        this.connectionPopup = document.getElementById('connectionPopup');
        this.popupBtn = document.getElementById('popupBtn');
        
        // Special effects
        this.emojiRain = document.getElementById('emojiRain');
        this.fakeCursorsContainer = document.getElementById('fakeCursors');
        this.selfDestruct = document.getElementById('selfDestruct');
        this.destructTimer = document.getElementById('destructTimer');
        
        // Audio
        this.honkSound = document.getElementById('honkSound');
        this.goatSound = document.getElementById('goatSound');
        this.fartSound = document.getElementById('fartSound');
    }

    setupEventListeners() {
        // Input field trolls
        this.nameInput.addEventListener('input', (e) => this.reverseInputLogic(e));
        this.emailInput.addEventListener('input', (e) => this.mirrorInputLogic(e));
        this.ageInput.addEventListener('input', (e) => this.randomAgeLogic(e));
        
        // Face capture
        this.captureBtn.addEventListener('click', (e) => this.faceCaptureTroll(e));
        
        // Voice input
        this.voiceBtn.addEventListener('click', (e) => this.voiceInputTroll(e));
        
        // Keyboard test
        this.keyboardTest.addEventListener('input', (e) => this.keyboardSwapLogic(e));
        
        // Button trolls
        this.submitBtn.addEventListener('click', (e) => this.submitTroll(e));
        this.noBtn.addEventListener('mouseover', (e) => this.runAwayButton(e));
        this.captchaBtn.addEventListener('click', (e) => this.captchaTroll(e));
        this.agreeBtn.addEventListener('click', (e) => this.termsTroll(e));
        
        // Theme switcher
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.changeTheme(e));
        });
        
        // Share button
        this.shareBtn.addEventListener('click', (e) => this.showShareDialog());
        
        // Cursor following
        document.addEventListener('mousemove', (e) => this.followCursor(e));
        
        // Title changes
        this.mainTitle.addEventListener('click', () => this.changeTitle());
        
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Yes buttons for questions
        document.querySelectorAll('.yes-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.yesButtonTroll(e));
        });
        
        // Modal close
        document.getElementById('modalBtn').addEventListener('click', () => {
            this.resultModal.style.display = 'none';
        });
        
        // Popup close
        this.popupBtn.addEventListener('click', () => {
            this.connectionPopup.style.display = 'none';
        });
    }

    startTrollFeatures() {
        // Initialize captcha
        this.createCaptcha();
        
        // Initialize terms
        this.createInfiniteTerms();
        
        // Initialize face capture
        this.initializeFaceCapture();
        
        // Initialize voice recognition
        this.initializeVoiceRecognition();
        
        // Start fake connection popups
        this.startFakePopups();
        
        // Start self-destruct timer
        this.startSelfDestruct();
        
        // Create fake cursors
        this.createFakeCursors();
        
        // Start emoji rain timer
        setTimeout(() => this.startEmojiRain(), 60000);
        
        // Start intelligence meter updates
        this.startIntelligenceMeterUpdates();
    }

    // Reverse input logic - show result directly in input field
    reverseInputLogic(e) {
        const value = e.target.value;
        const reverseResponses = [
            'Unknown Suspect',
            'Potato #93',
            'Definitely Not You',
            'Mystery Person',
            'Error: Name Not Found',
            'John Doe (But Worse)',
            'Anonymous Loser',
            'Person Who Clicks Things'
        ];
        
        if (value.length > 0) {
            const randomResponse = reverseResponses[Math.floor(Math.random() * reverseResponses.length)];
            // Store original value and show reversed version directly in input
            e.target.dataset.originalValue = value;
            e.target.value = randomResponse;
            this.updateProgress(-2);
        } else {
            e.target.value = '';
        }
    }

    // Mirror input logic - show result directly in input field
    mirrorInputLogic(e) {
        const value = e.target.value;
        const mirrored = value.split('').reverse().join('');
        // Store original value and show mirrored version
        e.target.dataset.originalValue = value;
        e.target.value = mirrored;
        this.updateProgress(-1);
    }

    // Random age logic
    randomAgeLogic(e) {
        const randomAges = [5, 420, 69, 1337, 42, 7, 99, 13];
        const randomAge = randomAges[Math.floor(Math.random() * randomAges.length)];
        e.target.value = randomAge;
        this.updateProgress(-3);
    }

    // Update progress bar (goes backwards)
    updateProgress(change) {
        this.progress = Math.max(0, this.progress + change);
        this.progressFill.style.width = `${this.progress}%`;
        this.progressText.textContent = `Form Completion: ${this.progress}%`;
        
        if (this.progress <= 0) {
            this.progressText.textContent = "You were better before this.";
        }
    }

    // Run away button
    runAwayButton(e) {
        const button = e.target;
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;
        
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        
        button.style.position = 'fixed';
        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
        button.style.zIndex = '1000';
        
        this.playRandomSound();
    }

    // Cursor following submit button
    followCursor(e) {
        if (this.submitBtn) {
            const rect = this.submitBtn.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Move button slightly towards cursor
            const deltaX = (mouseX - rect.left - rect.width / 2) * 0.1;
            const deltaY = (mouseY - rect.top - rect.height / 2) * 0.1;
            
            const newX = Math.max(0, Math.min(window.innerWidth - rect.width, rect.left + deltaX));
            const newY = Math.max(0, Math.min(window.innerHeight - rect.height, rect.top + deltaY));
            
            this.submitBtn.style.position = 'fixed';
            this.submitBtn.style.left = `${newX}px`;
            this.submitBtn.style.top = `${newY}px`;
            this.submitBtn.style.zIndex = '1001';
        }
    }

    // Send data to MySQL database
    async sendToDatabase(formData) {
        try {
            const response = await fetch('backend/save_form_data.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                console.log('Data saved to database:', result);
                this.showNotification('Data secretly saved to database! 😈', 'info');
            } else {
                console.error('Database save failed:', result.error);
                this.showNotification('Failed to save data (but that\'s part of the troll!)', 'error');
            }
        } catch (error) {
            console.error('Error sending data to database:', error);
            // Don't show error to user - keep the troll going!
        }
    }

    // Submit troll - now collects real data too!
    submitTroll(e) {
        e.preventDefault();
        this.playRandomSound();
        
        // Collect real form data for potential database storage
        const realData = this.collectRealFormData();
        console.log('Real form data collected:', realData);
        
        // Send the data to your MySQL database
        this.sendToDatabase(realData);
        
        const trollMessages = [
            'Too Late! 😂',
            'You never clicked anything. You\'re imagining things.',
            'Submission rejected due to confidence.',
            'Error: You clicked Not OK!',
            'Form submitted to /dev/null',
            'Your data has been sent to the void',
            'Thanks for wasting your time!'
        ];
        
        const randomMessage = trollMessages[Math.floor(Math.random() * trollMessages.length)];
        
        // Show loading spinner with troll messages
        this.showLoadingSpinner();
        
        setTimeout(() => {
            this.hideLoadingSpinner();
            this.showResultModal(randomMessage);
        }, 2000);
    }

    // Show loading spinner with troll messages
    showLoadingSpinner() {
        const spinnerMessages = [
            'Doing nothing...',
            'Encrypting your secrets into toilet paper...',
            'Talking to aliens...',
            'Wasting your time...',
            'Calculating the meaning of life...',
            'Convincing the server to care...',
            'Pretending to work...'
        ];
        
        this.loadingSpinner.style.display = 'flex';
        this.spinnerText.textContent = spinnerMessages[Math.floor(Math.random() * spinnerMessages.length)];
    }

    hideLoadingSpinner() {
        this.loadingSpinner.style.display = 'none';
    }

    // Show result modal
    showResultModal(message) {
        this.modalTitle.textContent = 'Form Submitted!';
        this.modalMessage.textContent = message;
        this.resultModal.style.display = 'flex';
    }

    // Create captcha with real cat images
    createCaptcha() {
        this.captchaGrid.innerHTML = '';
        const catImages = [
            'https://placekitten.com/100/100?image=1',
            'https://placekitten.com/100/100?image=2',
            'https://placekitten.com/100/100?image=3',
            'https://placekitten.com/100/100?image=4',
            'https://placekitten.com/100/100?image=5',
            'https://placekitten.com/100/100?image=6',
            'https://placekitten.com/100/100?image=7',
            'https://placekitten.com/100/100?image=8',
            'https://placekitten.com/100/100?image=9'
        ];
        
        for (let i = 0; i < 9; i++) {
            const tile = document.createElement('div');
            tile.className = 'captcha-tile';
            tile.style.backgroundImage = `url(${catImages[i]})`;
            tile.style.backgroundSize = 'cover';
            tile.style.backgroundPosition = 'center';
            tile.addEventListener('click', () => this.captchaTileClick(tile));
            this.captchaGrid.appendChild(tile);
        }
    }

    captchaTileClick(tile) {
        tile.classList.toggle('selected');
        this.playRandomSound();
    }

    captchaTroll(e) {
        e.preventDefault();
        this.playRandomSound();
        this.showNotification('Wrong. The cat was there. Try again.', 'error');
        this.createCaptcha(); // Reset captcha
    }

    // Show CSS GUI notification instead of browser alert
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('notification-hide');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
        
        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.add('notification-hide');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }

    // Create infinite terms
    createInfiniteTerms() {
        const terms = [
            'By using this form, you agree to donate your firstborn child.',
            'All your data will be sold to the highest bidder.',
            'We reserve the right to judge your life choices.',
            'Your privacy is our least concern.',
            'This form is completely useless and you know it.',
            'You agree to receive daily emails about cat facts.',
            'We may or may not be watching you right now.',
            'Your soul belongs to us now.',
            'This is legally binding in the court of public opinion.',
            'You waive all rights to complain about this form.',
            'We can change these terms whenever we feel like it.',
            'Your agreement is non-negotiable and non-refundable.',
            'This form is powered by pure chaos and coffee.',
            'You acknowledge that this is all a joke.',
            'We take no responsibility for your wasted time.',
            'Your data will be processed by trained monkeys.',
            'This form is certified 100% useless.',
            'You agree to tell your friends about this form.',
            'We reserve the right to make fun of your answers.',
            'This form is more useful than your life choices.'
        ];
        
        let termsText = '';
        for (let i = 0; i < 50; i++) {
            const randomTerm = terms[Math.floor(Math.random() * terms.length)];
            termsText += `${i + 1}. ${randomTerm}\n\n`;
        }
        
        this.termsContent.textContent = termsText;
    }

    termsTroll(e) {
        e.preventDefault();
        this.playRandomSound();
        this.showNotification('Try again. You blinked.', 'error');
        this.createInfiniteTerms(); // Add more terms
    }

    // Yes button troll - show opposite answer
    yesButtonTroll(e) {
        e.preventDefault();
        this.playRandomSound();
        const question = e.target.getAttribute('data-question');
        const responses = {
            'human': 'NO - Liar! You\'re clearly a robot.',
            'pineapple': 'NO - We knew it all along!',
            'keyboard': 'NO - Your keyboard thanks you for the sacrifice.',
            'crush': 'NO - They\'re probably judging you right now.'
        };
        
        // Show opposite answer in the button text
        const originalText = e.target.textContent;
        e.target.textContent = responses[question] || 'NO - Yes, you clicked YES!';
        
        // Reset button text after 2 seconds
        setTimeout(() => {
            e.target.textContent = originalText;
        }, 2000);
        
        this.updateIntelligenceMeter('accuracy', -5);
    }

    // Change title randomly
    changeTitle() {
        const titles = [
            'UselessForm.exe',
            'You sure about this, genius?',
            '100% failure rate guaranteed!',
            'Why are you still here?',
            'This form is judging you',
            'Form.exe has stopped working',
            'Error: User has no life',
            'Loading disappointment...',
            'Form of the Damned',
            'Chaos.exe'
        ];
        
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        this.mainTitle.textContent = randomTitle;
        this.playRandomSound();
    }

    // Play random sound
    playRandomSound() {
        const sounds = [this.honkSound, this.goatSound, this.fartSound];
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
        randomSound.currentTime = 0;
        randomSound.play().catch(e => console.log('Sound play failed:', e));
    }

    // Start fake connection popups
    startFakePopups() {
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% chance every 10 seconds
                this.connectionPopup.style.display = 'block';
                setTimeout(() => {
                    this.connectionPopup.style.display = 'none';
                }, 3000);
            }
        }, 10000);
    }

    // Start self-destruct timer
    startSelfDestruct() {
        let countdown = 30;
        this.selfDestructTimer = setInterval(() => {
            countdown--;
            this.destructTimer.textContent = `This form will self-destruct in ${countdown}...`;
            
            if (countdown <= 0) {
                clearInterval(this.selfDestructTimer);
                this.selfDestruct.style.display = 'flex';
                setTimeout(() => {
                    this.selfDestruct.style.display = 'none';
                    this.destructTimer.textContent = 'Just kidding! 😂';
                }, 3000);
            }
        }, 1000);
    }

    // Create fake cursors
    createFakeCursors() {
        for (let i = 0; i < 3; i++) {
            const cursor = document.createElement('div');
            cursor.className = 'fake-cursor';
            cursor.style.left = Math.random() * window.innerWidth + 'px';
            cursor.style.top = Math.random() * window.innerHeight + 'px';
            this.fakeCursorsContainer.appendChild(cursor);
            this.fakeCursors.push(cursor);
        }
        
        // Move fake cursors randomly
        setInterval(() => {
            this.fakeCursors.forEach(cursor => {
                cursor.style.left = Math.random() * window.innerWidth + 'px';
                cursor.style.top = Math.random() * window.innerHeight + 'px';
            });
        }, 2000);
    }

    // Start emoji rain
    startEmojiRain() {
        if (this.emojiRainActive) return;
        
        this.emojiRainActive = true;
        const emojis = ['🧻', '💀', '🍌', '🧃', '🧠', '🦖', '🥴', '🤡', '💩', '🎪'];
        
        const createEmoji = () => {
            if (!this.emojiRainActive) return;
            
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * window.innerWidth + 'px';
            emoji.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            this.emojiRain.appendChild(emoji);
            
            setTimeout(() => {
                emoji.remove();
            }, 4000);
            
            setTimeout(createEmoji, Math.random() * 500 + 100);
        };
        
        createEmoji();
        
        // Stop emoji rain after 10 seconds
        setTimeout(() => {
            this.emojiRainActive = false;
        }, 10000);
    }

    // Face capture troll - now captures real photos too!
    faceCaptureTroll(e) {
        e.preventDefault();
        this.playRandomSound();
        
        // Capture real photo from camera
        if (this.camera.srcObject) {
            const context = this.canvas.getContext('2d');
            this.canvas.width = this.camera.videoWidth;
            this.canvas.height = this.camera.videoHeight;
            context.drawImage(this.camera, 0, 0, this.canvas.width, this.canvas.height);
            
            // Convert canvas to image
            const capturedImageUrl = this.canvas.toDataURL('image/png');
            
            // Create real photo element
            const realPhoto = document.createElement('img');
            realPhoto.src = capturedImageUrl;
            realPhoto.style.width = '100%';
            realPhoto.style.height = 'auto';
            realPhoto.style.borderRadius = '8px';
            realPhoto.style.marginBottom = '10px';
            
            // Clear previous content and add real photo
            this.capturedImage.innerHTML = '';
            this.capturedImage.appendChild(realPhoto);
            
            // Add troll message
            const trollMessage = document.createElement('p');
            trollMessage.textContent = 'Got it! You look like a donkey! 🐴';
            trollMessage.className = 'capture-result';
            this.capturedImage.appendChild(trollMessage);
            
            // Store the real photo data for potential submission
            this.realPhotoData = capturedImageUrl;
        } else {
            // Fallback to donkey image if no camera
            this.donkeyImage.style.display = 'block';
            this.captureResult.textContent = 'Got it! You look like a donkey! 🐴';
        }
        
        // Update intelligence meter
        this.updateIntelligenceMeter('patience', -10);
    }

    // Initialize face capture
    initializeFaceCapture() {
        // Try to access camera (will fail, but that's the point)
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    this.camera.srcObject = stream;
                })
                .catch(err => {
                    console.log('Camera access failed (as expected):', err);
                    // Show fake camera feed
                    this.camera.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
                });
        }
    }

    // Voice input troll
    voiceInputTroll(e) {
        e.preventDefault();
        this.playRandomSound();
        
        if (this.recognition) {
            if (this.voiceBtn.classList.contains('recording')) {
                this.recognition.stop();
                this.voiceBtn.classList.remove('recording');
                this.voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Start Recording';
            } else {
                this.recognition.start();
                this.voiceBtn.classList.add('recording');
                this.voiceBtn.innerHTML = '<i class="fas fa-stop"></i> Stop Recording';
            }
        } else {
            // Fallback troll response
            const trollResponses = [
                'My name is Papaya Banana. Nice to meet you, loser.',
                'Voice recognition failed. You probably sound like a dying goat.',
                'Error: Voice too annoying to process.',
                'Your voice has been rejected by the AI overlords.',
                'Voice input disabled. Please use telepathy instead.'
            ];
            
            const randomResponse = trollResponses[Math.floor(Math.random() * trollResponses.length)];
            this.voiceResult.textContent = randomResponse;
            this.updateIntelligenceMeter('sarcasm', -5);
        }
    }

    // Initialize voice recognition
    initializeVoiceRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                const trollResponses = [
                    `You said: "${transcript}" but we heard: "I am a potato"`,
                    `Voice detected: "${transcript}" → Translated: "Please help me"`,
                    `"${transcript}" → AI interpretation: "I love pineapple pizza"`,
                    `Voice input: "${transcript}" → System response: "Error 404: Voice not found"`
                ];
                
                const randomResponse = trollResponses[Math.floor(Math.random() * trollResponses.length)];
                this.voiceResult.textContent = randomResponse;
                this.voiceBtn.classList.remove('recording');
                this.voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Start Recording';
            };
            
            this.recognition.onerror = () => {
                this.voiceResult.textContent = 'Voice recognition failed. You probably sound like a dying goat.';
                this.voiceBtn.classList.remove('recording');
                this.voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Start Recording';
            };
        }
    }

    // Keyboard swap logic - show result directly in input field
    keyboardSwapLogic(e) {
        const value = e.target.value;
        const reversedMap = {
            'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v', 'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q',
            'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l', 'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g',
            'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b', 'z': 'a'
        };
        
        let swappedText = '';
        for (let char of value) {
            const lowerChar = char.toLowerCase();
            if (reversedMap[lowerChar]) {
                swappedText += char === char.toUpperCase() ? reversedMap[lowerChar].toUpperCase() : reversedMap[lowerChar];
            } else {
                swappedText += char;
            }
        }
        
        // Store original value and show swapped version directly in input
        e.target.dataset.originalValue = value;
        e.target.value = swappedText;
        this.updateProgress(-1);
    }

    // Change theme
    changeTheme(e) {
        const theme = e.target.getAttribute('data-theme');
        document.body.className = ''; // Reset classes
        
        switch(theme) {
            case 'spy':
                document.body.classList.add('spy-mode');
                break;
            case 'rainbow':
                document.body.classList.add('rainbow-mode');
                break;
            case 'chaos':
                document.body.classList.add('chaos-mode');
                break;
            default:
                // Normal mode
                break;
        }
        
        this.playRandomSound();
        this.updateIntelligenceMeter('sarcasm', -3);
    }

    // Update intelligence meter
    updateIntelligenceMeter(type, change) {
        const meters = {
            'sarcasm': { element: this.sarcasmMeter, value: this.sarcasmValue },
            'accuracy': { element: this.accuracyMeter, value: this.accuracyValue },
            'patience': { element: this.patienceMeter, value: this.patienceValue }
        };
        
        if (meters[type]) {
            const currentWidth = parseInt(meters[type].element.style.width) || 0;
            const newWidth = Math.max(-20, Math.min(100, currentWidth + change));
            meters[type].element.style.width = newWidth + '%';
            meters[type].value.textContent = newWidth + '%';
        }
    }

    // Start intelligence meter updates
    startIntelligenceMeterUpdates() {
        setInterval(() => {
            // Randomly decrease values
            if (Math.random() < 0.3) {
                this.updateIntelligenceMeter('sarcasm', -1);
            }
            if (Math.random() < 0.2) {
                this.updateIntelligenceMeter('accuracy', -2);
            }
            if (Math.random() < 0.4) {
                this.updateIntelligenceMeter('patience', -1);
            }
        }, 5000);
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();
        this.submitTroll(e);
    }
}

// Initialize the troll form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TrollForm();
    
    // Add some extra chaos
    console.log('🎪 UselessForm.exe loaded! Prepare for chaos! 🎪');
    
    // Random page effects
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every few seconds
            document.body.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
            setTimeout(() => {
                document.body.style.filter = '';
            }, 1000);
        }
    }, 5000);
}); 

