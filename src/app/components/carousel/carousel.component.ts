import { Component } from "@angular/core";
import { Carousel } from "src/app/interface/carousel.interface";
import { StoreService } from "src/app/service/store.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent {

  images: Carousel[] = [];
  currentImageIndex = 0;

  constructor(private storeService: StoreService) { }


  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    const product = await this.storeService.getProductsPagination(1, 10);
    this.images = product.flatMap(item => item.images);
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
    }, 3000);
  }
}
