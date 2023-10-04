new TypeIt("#type", {
  speed: 50,
  loop: true,
  waitUntilVisible: true,
})
  .type("Innovate", { delay: 1000 })
  .pause(1000)
  .delete(100)
  .type("Code", { delay: 1000 })
  .pause(1000)
  .delete(100)
  .type("Succeed", { delay: 1000 })
  .pause(1000)
  .delete(100)
  .go();
