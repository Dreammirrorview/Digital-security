// Security Robot Dashboard - Olawale Abdul-Ganiyu, Adegan Global
// Comprehensive Security Monitoring System

class SecurityRobot {
    constructor() {
        this.voiceEnabled = true;
        this.currentLocation = null;
        this.activeCall = false;
        this.securityLevel = 'high';
        this.connectedDevices = [];
        this.securityAlerts = [];
        this.init();
    }
    
    init() {
        this.initializeEventListeners();
        this.detectDeviceInformation();
        this.startMonitoring();
        this.initializeVoiceCommands();
        this.generateSecurityAlerts();
        this.simulateNetworkConnections();
    }

    // Initialize Event Listeners
    initializeEventListeners() {
        // Menu Toggle
        document.getElementById('menuToggle').addEventListener('click', () => {
            document.querySelector('.navigation').classList.toggle('active');
        });

        // Menu Navigation
        document.querySelectorAll('.menu-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Voice Toggle
        document.getElementById('voiceToggle').addEventListener('click', () => {
            this.voiceEnabled = !this.voiceEnabled;
            const btn = document.getElementById('voiceToggle');
            btn.innerHTML = this.voiceEnabled ? 
                '<i class="fas fa-volume-up"></i>' : 
                '<i class="fas fa-volume-mute"></i>';
            
            if (this.voiceEnabled) {
                this.speak('Voice commands enabled');
            }
        });

        // Emergency Button
        document.getElementById('emergencyToggle').addEventListener('click', () => {
            this.triggerEmergencyAlert();
        });

        // Location Search
        document.getElementById('searchLocation').addEventListener('click', () => {
            this.searchLocation();
        });

        document.getElementById('locationInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchLocation();
            }
        });

        // Device Tracking
        document.getElementById('trackDevice').addEventListener('click', () => {
            this.trackDevice();
        });

        document.getElementById('targetDevice').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.trackDevice();
            }
        });

        // Network Refresh
        document.getElementById('refreshNetwork').addEventListener('click', () => {
            this.simulateNetworkConnections();
            this.speak('Network scan complete. All connections verified.');
        });

        // Touch Controls
        document.getElementById('scanNetwork').addEventListener('click', () => {
            this.scanNetwork();
        });

        document.getElementById('checkSecurity').addEventListener('click', () => {
            this.checkSecurity();
        });

        document.getElementById('emergencyAlert').addEventListener('click', () => {
            this.triggerEmergencyAlert();
        });

        document.getElementById('systemReport').addEventListener('click', () => {
            this.generateSystemReport();
        });

        document.getElementById('locateDevice').addEventListener('click', () => {
            this.locateDevice();
        });

        document.getElementById('blockAll').addEventListener('click', () => {
            this.blockAllConnections();
        });

        // Voice Controls
        document.getElementById('makeCall').addEventListener('click', () => {
            this.makeCall();
        });

        document.getElementById('receiveCall').addEventListener('click', () => {
            this.receiveCall();
        });

        document.getElementById('endCall').addEventListener('click', () => {
            this.endCall();
        });

        // Map Controls
        document.querySelectorAll('.map-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.switchMapType(btn.dataset.map);
            });
        });

        // Modal Controls
        document.getElementById('closeAlertModal').addEventListener('click', () => {
            document.getElementById('alertModal').classList.remove('active');
        });

        document.getElementById('closeVoiceModal').addEventListener('click', () => {
            document.getElementById('voiceModal').classList.remove('active');
        });

        document.getElementById('stopVoice').addEventListener('click', () => {
            document.getElementById('voiceModal').classList.remove('active');
        });

        // Alert Action Buttons
        document.querySelectorAll('.alert-actions button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = btn.classList.contains('block-btn') ? 'block' : 'allow';
                const alertItem = btn.closest('.alert-item');
                this.handleAlertAction(alertItem, action);
            });
        });
    }

    // Detect Device Information
    detectDeviceInformation() {
        const ua = navigator.userAgent;
        let deviceType = 'Unknown';
        let deviceName = 'Unknown Device';
        let deviceCompany = 'Unknown Manufacturer';

        // Detect device type
        if (/mobile/i.test(ua)) {
            deviceType = 'Mobile Phone';
        } else if (/tablet/i.test(ua)) {
            deviceType = 'Tablet';
        } else {
            deviceType = 'Computer';
        }

        // Detect browser/device
        if (ua.includes('Windows')) {
            deviceName = 'Windows PC';
            deviceCompany = 'Microsoft';
        } else if (ua.includes('Mac')) {
            deviceName = 'Macintosh';
            deviceCompany = 'Apple';
        } else if (ua.includes('Linux')) {
            deviceName = 'Linux System';
            deviceCompany = 'Various';
        } else if (ua.includes('Android')) {
            deviceName = 'Android Device';
            deviceCompany = 'Google/Various';
        } else if (ua.includes('iPhone')) {
            deviceName = 'iPhone';
            deviceCompany = 'Apple';
        } else if (ua.includes('iPad')) {
            deviceName = 'iPad';
            deviceCompany = 'Apple';
        }

        // Generate device code
        const deviceCode = this.generateDeviceCode();

        // Update display
        document.getElementById('deviceName').textContent = deviceName;
        document.getElementById('deviceType').textContent = deviceType;
        document.getElementById('deviceCompany').textContent = deviceCompany;
        document.getElementById('deviceCode').textContent = deviceCode;

        // Simulate memory usage
        this.updateMemoryDisplay();
    }

    generateDeviceCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = 'DEV-';
        for (let i = 0; i < 8; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }

    updateMemoryDisplay() {
        setInterval(() => {
            // Simulate memory usage
            const ramUsage = Math.floor(Math.random() * 30) + 50;
            const romUsage = Math.floor(Math.random() * 20) + 35;
            const storageUsage = Math.floor(Math.random() * 25) + 60;

            document.getElementById('ramBar').style.width = `${ramUsage}%`;
            document.getElementById('romBar').style.width = `${romUsage}%`;
            document.getElementById('storageBar').style.width = `${storageUsage}%`;
        }, 3000);
    }

    // Start Monitoring
    startMonitoring() {
        // Simulate continuous monitoring
        setInterval(() => {
            this.checkNetworkConnections();
            this.monitorSecurityStatus();
            this.updateSystemStatus();
        }, 5000);

        // Get user location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.currentLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    this.displayLocationOnMap();
                },
                (error) => {
                    console.log('Location access denied or unavailable');
                }
            );
        }
    }

    // Initialize Voice Commands
    initializeVoiceCommands() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.lang = 'en-US';

            this.recognition.onresult = (event) => {
                const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
                this.processVoiceCommand(transcript);
            };

            this.recognition.onerror = (event) => {
                console.log('Speech recognition error:', event.error);
            };
        }
    }

    processVoiceCommand(command) {
        if (!this.voiceEnabled) return;

        if (command.includes('scan network')) {
            this.scanNetwork();
        } else if (command.includes('check security')) {
            this.checkSecurity();
        } else if (command.includes('emergency')) {
            this.triggerEmergencyAlert();
        } else if (command.includes('locate')) {
            this.locateDevice();
        } else if (command.includes('block all')) {
            this.blockAllConnections();
        } else if (command.includes('system report')) {
            this.generateSystemReport();
        }
    }

    // Voice Synthesis
    speak(text) {
        if (!this.voiceEnabled) return;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        // Try to use a natural voice
        const voices = speechSynthesis.getVoices();
        const preferredVoice = voices.find(voice => 
            voice.name.includes('Google US English') || 
            voice.name.includes('Samantha') ||
            voice.name.includes('Microsoft David')
        );
        
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        speechSynthesis.speak(utterance);
    }

    // Network Functions
    simulateNetworkConnections() {
        const networks = [
            {
                name: 'Home Network',
                type: 'WiFi',
                ip: '192.168.1.100',
                status: 'Connected',
                signal: 'Strong'
            },
            {
                name: 'Mobile Data',
                type: '4G',
                ip: '192.168.100.50',
                status: 'Available',
                signal: 'Good'
            },
            {
                name: 'Bluetooth',
                type: 'BT',
                ip: 'N/A',
                status: 'Active',
                signal: 'Excellent'
            },
            {
                name: 'Office VPN',
                type: 'VPN',
                ip: '10.0.0.50',
                status: 'Disconnected',
                signal: 'N/A'
            }
        ];

        this.displayNetworks(networks);
    }

    displayNetworks(networks) {
        const networkList = document.getElementById('networkList');
        networkList.innerHTML = '';

        networks.forEach(network => {
            const networkItem = document.createElement('div');
            networkItem.className = 'network-item';
            networkItem.innerHTML = `
                <div class="network-info">
                    <span class="network-name">${network.name}</span>
                    <span class="network-type">${network.type}</span>
                </div>
                <div class="network-details">
                    <span class="network-ip">${network.ip}</span>
                    <span class="network-status">${network.status}</span>
                </div>
            `;
            networkList.appendChild(networkItem);
        });
    }

    checkNetworkConnections() {
        // Simulate checking network connections
        const connections = Math.floor(Math.random() * 5) + 3;
        this.speak(`Monitoring ${connections} active network connections`);
    }

    // Security Functions
    generateSecurityAlerts() {
        const alertTypes = [
            {
                type: 'critical',
                title: 'Unauthorized Access Attempt',
                message: 'IP: 192.168.1.155 - attempting to access admin panel',
                icon: 'exclamation-circle'
            },
            {
                type: 'warning',
                title: 'Suspicious Login Attempt',
                message: 'Multiple failed login attempts from unknown device',
                icon: 'exclamation-triangle'
            },
            {
                type: 'info',
                title: 'New Device Connection',
                message: 'Device connected via WiFi - verification required',
                icon: 'info-circle'
            }
        ];

        // Add initial alerts
        this.addAlert(alertTypes[0]);
        this.addAlert(alertTypes[1]);
        this.addAlert(alertTypes[2]);

        // Generate random alerts periodically
        setInterval(() => {
            if (Math.random() > 0.7) {
                const randomAlert = alertTypes[Math.floor(Math.random() * alertTypes.length)];
                this.addAlert(randomAlert);
            }
        }, 30000);
    }

    addAlert(alert) {
        const alertsList = document.getElementById('alertsList');
        const alertCount = document.getElementById('alertCount');
        
        const alertItem = document.createElement('div');
        alertItem.className = `alert-item ${alert.type}`;
        alertItem.innerHTML = `
            <div class="alert-icon">
                <i class="fas fa-${alert.icon}"></i>
            </div>
            <div class="alert-content">
                <div class="alert-title">${alert.title}</div>
                <div class="alert-details">${alert.message}</div>
                <div class="alert-time">Just now</div>
            </div>
            <div class="alert-actions">
                <button class="block-btn">Block</button>
                <button class="allow-btn">Allow</button>
            </div>
        `;

        alertsList.insertBefore(alertItem, alertsList.firstChild);
        
        // Update alert count
        const currentCount = parseInt(alertCount.textContent);
        alertCount.textContent = currentCount + 1;

        // Voice notification for critical alerts
        if (alert.type === 'critical' && this.voiceEnabled) {
            this.speak(`Security alert: ${alert.title}`);
        }
    }

    handleAlertAction(alertItem, action) {
        const title = alertItem.querySelector('.alert-title').textContent;
        
        if (action === 'block') {
            alertItem.style.opacity = '0.5';
            this.speak(`Blocked: ${title}`);
            
            // Show modal with details
            this.showAlertModal(title, 'blocked');
        } else if (action === 'allow') {
            alertItem.style.opacity = '0.5';
            this.speak(`Allowed: ${title}`);
            
            this.showAlertModal(title, 'allowed');
        }
    }

    showAlertModal(title, action) {
        const modal = document.getElementById('alertModal');
        const modalBody = document.getElementById('alertModalBody');
        
        modalBody.innerHTML = `
            <p class="alert-message">
                <strong>${title}</strong> has been <strong>${action}</strong>.
                <br><br>
                The system will continue monitoring for any further suspicious activity.
            </p>
        `;
        
        modal.classList.add('active');
    }

    // Location Functions
    searchLocation() {
        const input = document.getElementById('locationInput').value;
        
        if (input.trim() === '') {
            this.speak('Please enter a location to search');
            return;
        }

        this.speak(`Searching for location: ${input}`);
        
        // Simulate location search
        setTimeout(() => {
            this.displayLocationOnMap(input);
            this.speak(`Location found: ${input}`);
        }, 1500);
    }

    displayLocationOnMap(location = null) {
        const mapDisplay = document.getElementById('mapDisplay');
        
        // Simulate map display
        mapDisplay.innerHTML = `
            <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <i class="fas fa-map-marked-alt" style="font-size: 4rem; color: #00d4ff; margin-bottom: 1rem;"></i>
                <p style="color: #eaeaea; font-size: 1.2rem;">${location || 'Current Location'}</p>
                <p style="color: #8892b0; margin-top: 0.5rem;">
                    ${location ? 'Displaying map view for selected location' : 'Satellite view active'}
                </p>
                <div style="margin-top: 1rem; padding: 0.5rem 1rem; background: rgba(0, 212, 255, 0.1); border-radius: 5px; color: #00d4ff;">
                    Coordinates: ${this.currentLocation ? 
                        `${this.currentLocation.lat.toFixed(6)}, ${this.currentLocation.lng.toFixed(6)}` : 
                        '40.7128, -74.0060'}
                </div>
            </div>
        `;

        // Update location details
        if (location) {
            document.getElementById('addressValue').textContent = location;
            document.getElementById('cityValue').textContent = 'New York';
            document.getElementById('coordinatesValue').textContent = 
                `${this.currentLocation ? 
                    `${this.currentLocation.lat.toFixed(6)}, ${this.currentLocation.lng.toFixed(6)}` : 
                    '40.7128, -74.0060'}`;
        }
    }

    switchMapType(mapType) {
        this.speak(`Switching to ${mapType} view`);
        // Map type switching would be implemented here
    }

    // Device Tracking
    trackDevice() {
        const target = document.getElementById('targetDevice').value;
        
        if (target.trim() === '') {
            this.speak('Please enter a device IP or name to track');
            return;
        }

        this.speak(`Tracking device: ${target}`);
        
        // Simulate tracking
        setTimeout(() => {
            this.speak(`Device located: ${target}. IP address verified. Location: New York, USA`);
            this.displayLocationOnMap(`Device: ${target}`);
        }, 2000);
    }

    locateDevice() {
        this.speak('Locating current device...');
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    this.speak(`Device located at latitude ${lat.toFixed(4)}, longitude ${lng.toFixed(4)}`);
                    this.displayLocationOnMap();
                },
                (error) => {
                    this.speak('Unable to locate device. Location access may be disabled.');
                }
            );
        } else {
            this.speak('Geolocation not supported on this device');
        }
    }

    // Security Operations
    scanNetwork() {
        this.speak('Scanning network for threats and vulnerabilities...');
        
        setTimeout(() => {
            const threats = Math.floor(Math.random() * 3);
            const vulnerabilities = Math.floor(Math.random() * 5);
            
            if (threats === 0 && vulnerabilities === 0) {
                this.speak('Network scan complete. No threats or vulnerabilities detected.');
            } else {
                this.speak(`Network scan complete. Detected ${threats} potential threats and ${vulnerabilities} vulnerabilities.`);
            }
        }, 3000);
    }

    checkSecurity() {
        this.speak('Running comprehensive security check...');
        
        setTimeout(() => {
            const securityLevel = Math.floor(Math.random() * 10) + 90;
            this.speak(`Security check complete. System security level: ${securityLevel}%. All security protocols functioning normally.`);
        }, 2500);
    }

    triggerEmergencyAlert() {
        this.speak('EMERGENCY ALERT! Security threat detected. Initiating emergency protocols.');
        
        document.getElementById('alertModalBody').innerHTML = `
            <p class="alert-message">
                <strong>EMERGENCY ALERT</strong>
                <br><br>
                A security threat has been detected. Emergency protocols have been activated.
                <br><br>
                All connections are being monitored. Authorities have been notified.
                <br><br>
                Stay calm and follow the robot's instructions.
            </p>
        `;
        document.getElementById('alertModal').classList.add('active');

        // Flash emergency button
        const emergencyBtn = document.getElementById('emergencyToggle');
        emergencyBtn.style.animation = 'flash 0.5s infinite';
    }

    generateSystemReport() {
        this.speak('Generating comprehensive system security report...');
        
        setTimeout(() => {
            this.speak('System report generated. Available for download and analysis.');
            alert('System Security Report Generated\n\nReport includes:\n- Network Status\n- Security Levels\n- Threat Analysis\n- Device Information\n- Activity Logs');
        }, 2000);
    }

    blockAllConnections() {
        this.speak('Blocking all incoming and outgoing connections...');
        
        setTimeout(() => {
            this.speak('All connections blocked. System in lockdown mode. You are safe.');
        }, 1500);
    }

    monitorSecurityStatus() {
        // Continuous security monitoring
        const status = ['Secure', 'Monitoring', 'Scanning', 'Analyzing'];
        const randomStatus = status[Math.floor(Math.random() * status.length)];
        
        // Update status indicator if needed
    }

    updateSystemStatus() {
        // Update various system metrics
    }

    // Voice Communication
    makeCall() {
        if (this.activeCall) {
            this.speak('There is already an active call');
            return;
        }

        this.speak('Initiating voice call...');
        this.activeCall = true;
        
        document.getElementById('callStatus').innerHTML = 
            '<span class="status-text">Calling...</span>';
        
        setTimeout(() => {
            document.getElementById('callStatus').innerHTML = 
                '<span class="status-text">Connected</span>';
            this.speak('Call connected. You can now speak.');
        }, 2000);
    }

    receiveCall() {
        if (this.activeCall) {
            this.speak('Cannot receive call while another call is active');
            return;
        }

        this.speak('Incoming call detected. Answering...');
        this.activeCall = true;
        
        document.getElementById('callStatus').innerHTML = 
            '<span class="status-text">Connected</span>';
    }

    endCall() {
        if (!this.activeCall) {
            this.speak('No active call to end');
            return;
        }

        this.speak('Ending call...');
        this.activeCall = false;
        
        document.getElementById('callStatus').innerHTML = 
            '<span class="status-text">No active call</span>';
    }

    // Authentication Functions (Simulated)
    authenticateUser(credentials) {
        this.speak('Authenticating user credentials...');
        
        setTimeout(() => {
            this.speak('User authentication successful. Access granted.');
        }, 1500);
    }

    // Network Services Display
    displayNetworkServices() {
        const services = [
            'DNS Services',
            'HTTP/HTTPS',
            'FTP Services',
            'SMTP/Email',
            'SSH/Remote Access',
            'VPN Services',
            'Firewall Protection',
            'IDS/IPS Monitoring'
        ];
        
        // Display network services in the dashboard
    }

    // Satellite Tracking (Simulated)
    trackSatellites() {
        this.speak('Tracking satellite positions and connections...');
        
        const satellites = [
            { name: 'GPS', status: 'Active' },
            { name: 'GLONASS', status: 'Active' },
            { name: 'Galileo', status: 'Active' },
            { name: 'BeiDou', status: 'Active' },
            { name: 'Starlink', status: 'Monitoring' }
        ];

        this.speak(`Tracking ${satellites.length} satellite systems. All systems operational.`);
    }

    // Encryption Functions (Simulated)
    encryptData(data) {
        this.speak('Encrypting data with AES-256 encryption...');
        
        setTimeout(() => {
            this.speak('Data encryption complete. Secure transmission ready.');
        }, 1000);
    }

    decryptData(encryptedData) {
        this.speak('Decrypting data...');
        
        setTimeout(() => {
            this.speak('Data decrypted successfully.');
        }, 1000);
    }
}

// Initialize the Security Robot when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.securityRobot = new SecurityRobot();
    
    // Welcome message
    setTimeout(() => {
        window.securityRobot.speak('Security Robot System Online. Welcome, Olawale Abdul-Ganiyu. Adegan Global Security System is now active and monitoring all connections.');
    }, 1000);
});