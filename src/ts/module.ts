import "../styles/main.scss";

Hooks.once("init", () => {
    console.log("d66 | Initializing Hooks");
});

Hooks.on("renderChatLog", (_: Application) => {
    console.log("d66 | rendering buttons")
    const div = $(`<section class="flexrow tdr-d66"></section>`)
    const d66Button = $(
      `<button class="d66-dice-btn" type="button">d66</button></div>`
    );

    d66Button.on("click", () => {
      const roll = new Roll("d6*10 + d6").evaluate({async: false});
      roll.toMessage({
        rollMode: 'roll',
        speaker: {}
      })
    });

    const d666Button = $(
      `<button class="d66-dice-btn" type="button">d666</button></div>`
    );
    d666Button.on("click", () => {
      const roll = new Roll("d6*100 + d6*10 + d6").evaluate({async: false});
      roll.toMessage({
        rollMode: 'roll',
        speaker: {}
      })
    });

    div.append(d66Button)
    div.append(d666Button)
    div.insertAfter("#chat-form")
    //html.find("#chat-controls").append(button);
});