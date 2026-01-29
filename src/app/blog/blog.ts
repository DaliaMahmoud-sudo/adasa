import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  allPosts: any[] = [];
  categories: any[] = [];
  activeCategory: string = 'جميع المقالات';
  filteredPosts: any[] = [];
  flag: number = 0;
    selectedPost:any;
    currentPage: number = 1;
pageSize: number = 6;
paginatedPosts: any[] = [];
refreshView() {
  this.updatePagination();
}
  async ngOnInit() {
    const response = await fetch('/data/posts.json');
    const data = await response.json();
    this.allPosts = data.posts;
    this.categories=data.categories;
    this.filteredPosts = data.posts;
    this.refreshView();
  }


  clickspecificpost(id: number) {
    this.flag = id;
    this.selectedPost= this.allPosts.find(post => post.id === this.flag);
  }


filterByCategory(category: string) {
  this.activeCategory = category;
  this.currentPage = 1;

  if (category === 'جميع المقالات') {
    this.filteredPosts = this.allPosts;
  } else {
    this.filteredPosts = this.allPosts.filter(post => post.category === category);
  }

  this.refreshView();
}

updatePagination() {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.paginatedPosts = this.filteredPosts.slice(startIndex, endIndex);
}

goToPage(page: number) {
  this.currentPage = page;
  this.updatePagination();
  window.scrollTo(0, 400);
}

get totalPages(): number {
  return Math.ceil(this.filteredPosts.length / this.pageSize) || 1;
}

}
