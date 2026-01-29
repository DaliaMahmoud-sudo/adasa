import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-specific-blog',
  imports: [],
  templateUrl: './specific-blog.html',
  styleUrl: './specific-blog.css',
})

export class SpecificBlog {
  post: any;
  relatedPosts: any[] = [];

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    // 1. Get the slug from the URL (e.g., /blog/mastering-golden-hour)
    // const slug = this.route.snapshot.paramMap.get('slug');
    const slug ="mastering-golden-hour-photography";
    // 2. Fetch the data
    const response = await fetch('/data/posts.json');
    const data = await response.json();

    // 3. Find the specific post
    this.post = data.posts.find((p: any) => p.slug === slug);

    // 4. Get 3 related posts (same category, excluding current post)
    if (this.post) {
      this.relatedPosts = data.posts
        .filter((p: any) => p.category === this.post.category && p.slug !== slug)
        .slice(0, 3);
    }
  }
}

