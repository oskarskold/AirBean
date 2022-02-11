<template>
  <div class="about">
    <header>
      <img src="../assets/graphics/graphics-header.svg" alt="header" />
    </header>
    <div class="cart">
      <router-link to="/nav">
        <button class="menu-btn">
          <img src="../assets/graphics/navicon.svg" width="20" />
        </button>
      </router-link>
    </div>

    <h1>Vårt Kaffe</h1>
    <p>
      Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds
      dripper, crema, strong whipped, variety extra iced id lungo half and half
      mazagran. Pumpkin spice.
    </p>

    <p>
      Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
      aftertaste, con panna milk black, arabica white rich beans single shot
      extra affogato. So affogato macchiato sit extraction instant grinder
      seasonal organic, turkish single shot, single origin, and robusta strong
      to go so dripper. Viennese froth, grounds caramelization skinny aromatic
      cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait
      flavour cultivar ut bar instant kopi-luwak.
    </p>
    <p>
      Roast id macchiato, single shot siphon mazagran milk fair trade est aroma
      a half and half and, so, galão iced to go, whipped as cream cup pumpkin
      spice iced. At extra, rich grinder, brewed to go, steamed half and half
      at, that, percolator macchiato trifecta and body as arabica dripper. In
      galão black java milk sit trifecta, robusta, acerbic café au lait instant
      shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese
      cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk
      aromatic turkish skinny crema.
    </p>
    <div class="icon">
      <img src="../assets/graphics/eva-cortado.jpg" alt="Eva Cortado" />
      <h4>Eva Cortado</h4>
      <p>VD & Grundare</p>
    </div>
    <footer>
      <img src="../assets/graphics/graphics-footer.svg" alt="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
.about {
  background: #f3e4e1;
}
header img {
  width: 100%;
}
h1,
h4 {
  color: #2f2926;
  font-family: "PT Serif", serif;
}
.menu-btn {
  padding: 10px;
  border-radius: 50%;
  border: none;
  background-color: white;
  position: absolute;
  top: 80px;
  left: 30px;
}

.cart {
  display: flex;
  justify-content: right;
  margin: 1rem;
}

p {
  font-family: "Work Sans", sans-serif;
}

p:nth-of-type(1) {
  color: #2f2926;
  font-weight: 700;
  font-size: 1.3rem;
  margin: 0;
}
p:nth-of-type(2) {
  color: #2f2926;
  font-size: 1rem;
}
p:nth-of-type(3) {
  color: #2f2926;
  font-size: 1rem;
}

.wrapper-menu {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}
.title {
  display: flex;
  flex-direction: column;
}
.title div {
  display: flex;
}
.title div li {
  font-size: 1rem;
  font-weight: 600;
}
.container-menu {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 0 0;
  img {
    border-radius: 1000px;
  }
}
footer {
  width: 100%;
}
</style>
