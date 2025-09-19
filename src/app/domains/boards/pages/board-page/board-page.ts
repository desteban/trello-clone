import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board-page',
  imports: [],
  templateUrl: './board-page.html',
  styleUrl: './board-page.css',
})
export class BoardPage {
  private route = inject(ActivatedRoute);
  slug: string | null = this.route.snapshot.paramMap.get('id');
  loading: boolean = true;
}
