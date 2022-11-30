class Tv {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
    this.reset = function() {
      this.channel = 1;
      this.volume = 50;
    }
  }

  increaseVolume(amount) {
    const result = this.volume += amount;
    if (result > 100) {
      this.volume = 100;
    } else {
      this.volume = result;
    }
  }

  decreaseVolume(amount) {
    if (amount <= this.volume) {
      this.volume -= amount;
    } else {
      this.volume = 0;
    }
  }

  setChannel(number) {
    if (number && (number <= 50 && number >= 1)) {
      this.channel = number;
    } 
  }

  status() {
    return {
      brand: this.brand,
      channel: this.channel,
      volume: this.volume
    }
  }
}

window.onload = () => {
  const telly = new Tv("Panasonic");
  displayBrand(telly);
  displayVolume(telly);
  displayChannel(telly);
  addEvents(telly);
}

const displayBrand = (tv) => {
  const tvBrand = document.getElementById("tv-brand");
  tvBrand.innerHTML = tv.brand;
}

const displayVolume = (tv) => {
  const tvVolume = document.getElementById("tv-volume");
  tvVolume.innerHTML = tv.volume;
}

const displayChannel = (tv) => {
  const tvChannel = document.getElementById("tv-channel");
  tvChannel.innerHTML = tv.channel;
}

const addEvents = (tv) => {
  const upButton = document.getElementById("increase-volume");
  upButton.addEventListener("click", () => volumeUp(tv));
  const downButton = document.getElementById("decrease-volume");
  downButton.addEventListener("click", () => volumeDown(tv));
  const changeChannel = document.getElementById("change-channel");
  changeChannel.addEventListener("click", () => changeTheChannel(tv));
  const resetTv = document.getElementById("reset");
  resetTv.addEventListener("click", () => reset(tv));

}

const volumeUp = (tv) => {
  tv.increaseVolume(5);
  displayVolume(tv);
}

const volumeDown = (tv) => {
  tv.decreaseVolume(5);
  displayVolume(tv);
}

const changeTheChannel = (tv) => {
  const channelInput = document.getElementById("channel");
  tv.setChannel(channelInput.value);
  displayChannel(tv)
}

const reset = (tv) => {
  tv.reset();
  displayChannel(tv);
  displayVolume(tv);
}


//1) Create a TV class with properties like brand, channel and volume.
//    Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
//2) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
//3) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
//4) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
//5) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
