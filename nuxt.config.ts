// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Blinky",
      meta: [
        {
          property: "og:title",
          content: "Blinky"
        },
        {
          property: "og:description",
          content: "Simplifique, Conquiste e Desfrute. Transforme cada venda em um passo a passo para o topo e venda mais pagando menos.'"
        },
        {
          name: "description",
          content: "Simplifique, Conquiste e Desfrute. Transforme cada venda em um passo a passo para o topo e venda mais pagando menos."
        },
        {
          property: "og:url",
          content: "https://blinkybr.com"
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "keywords",
          content: "Blinky, blink, As menores taxas do mercado, e-commerce, digital, pagamento, gateway, afiliado"
        }
      ]
    }
  }
})