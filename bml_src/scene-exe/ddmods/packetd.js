(async function ({ log }, exe) {
    await exe.mods.load("msgpackr")
    await exe.mods.load("hidsim")
})