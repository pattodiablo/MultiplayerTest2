
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {

	constructor() {

		super("Scene1");

	}

	_create() {


	}

	/* START-USER-CODE */
	preload(){



	}


	create() {

		this._create();

		var pointer = this.input.activePointer;
		this.input.on('pointerdown', this.downAction, this);
		this.input.on('pointerup',this.upAction, this);

		var textoMensaje = this.add.text(this.scale.width/2, 120, 'Hello World', { fontFamily: 'Arial', fontSize: '46px', });
		textoMensaje.setOrigin(0.5, 0.5)
		let color = [0xD24CBA,0xC03D4A,0x8AC03D,0x2EE5CB,0x2E9BE5,0xA949E6];
		let randomNumber = Math.ceil(Math.random()*5);
		let randomColor = color[randomNumber];

		let playerShape = this.add.graphics();
		playerShape.lineStyle(5, 0xFF00FF, 1.0);
		playerShape.fillStyle(randomColor, 1);
		playerShape.fillRect(0, 0, 50, 50);

		let PlayerTexture = playerShape.generateTexture('playerShape',50,50);
		playerShape.destroy();

		var player = this.physics.add.image(this.scale.width/2,this.scale.height/2,this.textures.get("playerShape"));
		this.fplayer = player;
		this.fplayer.setCollideWorldBounds(true);
		this.fMensaje = textoMensaje;

	}


	update() {

	}

	printMessage(mensaje){
		this.fMensaje.setText(mensaje);
	}

	downAction(pointer){

 			this.game.croquetView.darEmitiendoMensaje('Hola Diego: cabron #');
			this.swipeCoordX = pointer.x;
			this.swipeCoordY = pointer.y;

	}

	upAction(pointer){

			this.swipeCoordX2 = pointer.x;
			this.swipeCoordY2 = pointer.y;

			this.powerY =  Math.abs(this.swipeCoordY2 - this.swipeCoordY);
			this.powerX =  Math.abs(this.swipeCoordX2 - this.swipeCoordX);
			this.directionY = Math.sign(this.swipeCoordY2 - this.swipeCoordY);
			this.directionX = Math.sign(this.swipeCoordX2 - this.swipeCoordX);

			this.fplayer.body.velocity.y = this.powerY*this.directionY;
			this.fplayer.body.velocity.x = this.powerX*this.directionX;

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */


// You can write more code here
