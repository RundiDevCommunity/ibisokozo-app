import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GeneralService } from 'src/app/core/services/general.service';
import { AuthState } from 'src/app/states/auth/auth.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  isAuthenticated$:Observable<boolean>
  isAuthenticated:boolean=false
  roles = ['Kaze kurubuga rw\'ibisokozo', 'Injira kugira utangure gukina', 'Iyungure ubumenyi ufise mub\'ibisokozo', 'Pima urugero uriko kub\'ibisokozo'];
  currentRoleIndex = 0;
  typingSpeed = 100; 



  constructor(
    private store : Store,
    private router: Router,
    private generalService : GeneralService,
    ) {
      this.isAuthenticated$=this.store.select(AuthState.isAuthenticated)
    }

  ngOnInit() {

    this.isAuthenticated$.subscribe((isAuthenticated:boolean)=>{
      this.isAuthenticated = isAuthenticated
    })



    this.getCanvas()

    this.generalService.disableGoBack()

    this.typeRole()

  }


  typeRole() {
    const roleText = this.roles[this.currentRoleIndex];
    const typingContainer:any = document.getElementById('typing-text');
    typingContainer.innerHTML = ''; 

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < roleText.length) {
        typingContainer.innerHTML += roleText.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          this.eraseRole();
        }, 10000); 
      }
    }, this.typingSpeed);
  }

  eraseRole() {
    const typingContainer:any = document.getElementById('typing-text');
    const roleText = this.roles[this.currentRoleIndex];
    let charIndex = roleText.length - 1;

    const erasingInterval = setInterval(() => {
      if (charIndex >= 0) {
        typingContainer.innerHTML = roleText.substring(0, charIndex);
        charIndex--;
      } else {
        clearInterval(erasingInterval);
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.typeRole();
      }
    }, this.typingSpeed / 1000); 
  }


  getCanvas(){
    const canvasBody = document.getElementById("canvas") as HTMLCanvasElement;
    const drawArea:any = canvasBody.getContext("2d");
    let w: number, h: number;
    let particles: any = [];
    let tid: ReturnType<typeof setTimeout>;
    const delay = 200;
    const opts = {
      particleColor: "rgb(200,200,200)",
      lineColor: "rgb(200,200,200)",
      particleAmount: 30,
      defaultSpeed: 1,
      variantSpeed: 1,
      defaultRadius: 2,
      variantRadius: 2,
      linkRadius: 200,
    };

    class Particle {
      x: number;
      y: number;
      speed: number;
      directionAngle: number;
      color: string;
      radius: number;
      vector: { x: number; y: number };

      constructor(xPos?: number, yPos?: number) {
        this.x = xPos || Math.random() * w;
        this.y = yPos || Math.random() * h;
        this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
        this.directionAngle = Math.floor(Math.random() * 360);
        this.color = opts.particleColor;
        this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
        this.vector = {
          x: Math.cos(this.directionAngle) * this.speed,
          y: Math.sin(this.directionAngle) * this.speed,
        };
      }

      update() {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
      }

      border() {
        if (this.x >= w || this.x <= 0) {
          this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
          this.vector.y *= -1;
        }
        if (this.x > w) this.x = w;
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
      }

      draw() {
        drawArea.beginPath();
        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        drawArea.closePath();
        drawArea.fillStyle = this.color;
        drawArea.fill();
      }
    }

    function resizeReset() {
      w = canvasBody.width = window.innerWidth;
      h = canvasBody.height = window.innerHeight;
    }

    function setup() {
      particles = [];
      resizeReset();
      for (let i = 0; i < opts.particleAmount; i++) {
        particles.push(new Particle());
      }
      loop();
    }

    function loop() {
      drawArea.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      for (let i = 0; i < particles.length; i++) {
        linkPoints(particles[i], particles);
      }
      window.requestAnimationFrame(loop);
    }
    function linkPoints(point1: Particle, hubs: Particle[]) {
      for (let i = 0; i < hubs.length; i++) {
        const point2 = hubs[i];
    
        const distance = Math.sqrt(
          (point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2
        );
    
        if (distance < opts.linkRadius) {
          drawArea.beginPath();
          drawArea.moveTo(point1.x, point1.y);
          drawArea.lineTo(point2.x, point2.y);
          drawArea.strokeStyle = opts.lineColor;
          drawArea.lineWidth = 0.5;
          drawArea.stroke();
          drawArea.closePath();
        }
      }
    }
    

    window.addEventListener("resize", function () {
      clearTimeout(tid);
      tid = setTimeout(function () {
        resizeReset();
      }, delay);
    });

    setup();

  }

  startGame() {
    this.router.navigateByUrl('/igisokozo/level-1');
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(){
    this.generalService.enableGoBack()
  }
}
