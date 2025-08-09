class ShoutScroller {
    constructor({ threshold = 5, scrollAmount = 20 } = {}) {
      this.threshold = threshold;
      this.scrollAmount = scrollAmount;
      this.audioContext = null;
      this.analyser = null;
      this.microphone = null;
      this.dataArray = null;
      this.isRunning = false;
    }
  
    async init() {
      try {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.microphone = this.audioContext.createMediaStreamSource(stream);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 2048;
        const bufferLength = this.analyser.fftSize;
        this.dataArray = new Uint8Array(bufferLength);
        this.microphone.connect(this.analyser);
        this.isRunning = true;
        this.detectShout();
        this.disableOtherScrolling();
        console.log("🎤 ShoutScroller initialized");
      } catch (err) {
        console.error("Microphone access denied or unavailable", err);
      }
    }
  
    detectShout() {
      this.analyser.getByteTimeDomainData(this.dataArray);
      let maxVolume = 0;
  
      for (let i = 0; i < this.dataArray.length; i++) {
        const deviation = Math.abs(this.dataArray[i] - 128);
        if (deviation > maxVolume) maxVolume = deviation;
      }
  
      console.log("Mic Volume:", maxVolume);
  
      if (maxVolume > this.threshold) {
        console.log("🟢 Shout detected! Scrolling...");
        window.scrollBy({ top: this.scrollAmount, behavior: "auto" });
      }
  
      if (this.isRunning) {
        requestAnimationFrame(() => this.detectShout());
      }
    }
  
    disableOtherScrolling() {
      // Prevent keyboard & mouse scroll
      window.addEventListener("wheel", e => e.preventDefault(), { passive: false });
      window.addEventListener("keydown", e => {
        const keys = ["ArrowUp", "ArrowDown", " ", "PageUp", "PageDown"];
        if (keys.includes(e.key)) e.preventDefault();
      });
  
      // Optional: Remove touch scroll on mobile
      window.addEventListener("touchmove", e => e.preventDefault(), { passive: false });
    }
  
    stop() {
      this.isRunning = false;
      this.audioContext?.close();
    }
  }
  