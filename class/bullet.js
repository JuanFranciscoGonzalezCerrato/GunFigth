import { GameObject } from "./gameObject.js";
import { setCustomProperty } from "./updateProperties.js";

export class Bullet extends GameObject {
	bulletElement;
	velocity = 18;
	timeLife = 1000;
	direction;
	destroyed = false;

	constructor(x, y, width, height, direction) {
		super(x, y, width, height);
		this.direction = direction;
		this.setElement();
	}

	setElement() {
		// Create the HTML element for the bullet
		this.bulletElement = document.createElement("div");
		this.bulletElement.classList.add("bullet-game");

		// Position the bullet based on the direction
		setCustomProperty(this.bulletElement, "left", this.x + "px");
		setCustomProperty(this.bulletElement, "bottom", this.y + "px");

		// Set the duration for the bullet's presence in the DOM
		setTimeout(() => {
			this.unableBullet()
		}, this.timeLife);
	}

	getElement() {
		// Return the HTML element of the bullet
		return this.bulletElement;
	}

	updateBullet() {
		// Update the position based on the direction
		if (this.direction === "left") {
			this.x -= this.velocity;
		} else if (this.direction === "right") {
			this.x += this.velocity;
		}

		setCustomProperty(this.bulletElement, "left", this.x + "px");

	}

	unableBullet() {
		this.bulletElement.remove();
		this.destroyed = true;
	}

}
