import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, UpperCasePipe, HeroDetailComponent]
})
export class HeroDetailComponent  implements OnInit {
  @Input() hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
