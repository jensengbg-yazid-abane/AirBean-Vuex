<template>
    <main id="about">
        <img
            @click="toggleMenu"
            class="navIcon"
            src="./../assets/graphics/navicon.png"
            alt="navIcon"
        />
        <div class="text">
            <article id="aboutText">
                <h1>About Us</h1>
                <p id="bold">
                    Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
                    grounds dripper, crema, strong whipped, variety extra iced id lungo half
                    and half mazagran. Pumpkin spice.
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
                    Roast id macchiato, single shot siphon mazagran milk fair trade est
                    aroma a half and half and, so, galão iced to go, whipped as cream cup
                    pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
                    and half at, that, percolator macchiato trifecta and body as arabica
                    dripper. In galão black java milk sit trifecta, robusta, acerbic café au
                    lait instant shop latte. Seasonal bar shop filter aroma id, crema,
                    affogato viennese cultivar aftertaste, seasonal, percolator cream black,
                    galão flavour, milk aromatic turkish skinny crema.
                </p>
            </article>
            <footer class="founder">
                <img src="./../assets/graphics/image 1.jpg" alt="Eva Cortado" id="imgEva" />
                <h3>Eva Cortado</h3>
                <h6>VD & Grundare</h6>
            </footer>
        </div>

    </main>
</template>

<script>
export default {
    name: 'About',
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style lang="scss">
    #about {
    .navIcon {
        display: flex;
        align-self: flex-start;
        justify-content: flex-start;
    }

    #aboutText {
        padding: 0 1rem 0 1rem;
        padding-top: 8rem;

        h1 {
            font-weight: bolder;
            font-size: 50px;
            padding-bottom: 15px;
        }

        #bold {
        font-weight: bolder;
        font-size: 20px;
        }

        p {
            font-size: 15px;
        }
    }

    footer {
        margin-bottom: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        #imgEva {
            border-radius: 999rem;
        }
    }
}
</style>