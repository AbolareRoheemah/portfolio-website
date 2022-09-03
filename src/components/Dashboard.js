import React, { useEffect } from 'react'

export default function Dashboard() {
    // typewritting function
    // var typewriter = (element, cycleTime, period) => {
    //     this.element = element
    //     this.cycleTime = cycleTime
    //     this.period = parseInt(period, 10) || 2000;
    //     this.loopNum = 0
    //     this.txt = '';
    //     this.tick();
    //     this.isDeleting = false;
    // }
    // typewriter.prototype.tick = () => {
    //     var i = this.loopNum % this.cycleTime.length;
    //     var fullText = this.cycleTime[i]

    //     if (this.isDeleting) {
    //         this.txt = fullText.substring(0, this.txt.length - 1)
    //     } else {
    //         this.txt = fullText.substring(0, this.txt.length + 1)
    //     }

    //     this.element.innerHTML = `<span class="wrap">${this.txt}</span>`;
    //     const dom = this
    //     var delta = 200 - Math.random() * 100;

    //     if (this.isDeleting) {
    //         delta /= 2
    //     }
    //     if (!this.isDeleting && this.txt === fullText) {
    //         delta = this.period
    //         this.isDeleting = true
    //     } else if (this.isDeleting && this.txt === '') {
    //         this.isDeleting = false
    //         this.loopNum++
    //         delta = 500
    //     }

    //     setTimeout(() => {
    //         dom.tick()
    //     }, delta)
    // }

    // useEffect(() => {
    //     const writer = document.getElementsByClassName('little-hero-text typewrite')
    //     for (let i = 0; i < writer.length; i++) {
    //         var cycleTime = writer[i].getAttribute('data-type');
    //         var period = writer[i].getAttribute('data-period');
    //         if (cycleTime) {
    //             new typewriter(writer[i], JSON.parse(cycleTime), period)
    //         }
    //     }
    // }, [])
    

  return (
    <div className='dashboard-ctn'>
        <div className="jumbotron-ctn">
            <div className="laptop-pic-ctn"></div>
            <div className="hero-text-ctn">
                <p className="hero-text">Hi! I'm Roheemah Abolare</p>
                <span className="little-hero-text typewrite" data-period="2000" data-type='["Frontend Developer", "I love coding", "And I build awesome responsive websites"]'></span>
                <span class="wrap"></span>
            </div>
        </div>
    </div>
  )
}
