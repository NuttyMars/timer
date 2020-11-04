//note: the sound does not play from the VSCode terminal, but it does work from the main terminal

const timer = function() {
  const alarms = process.argv.slice(2);

  if (alarms.length === 0) {
    return;
  }

  for (const alarm of alarms) {

    if ((Math.sign(alarm) === -1) ||
        isNaN(alarm)) {
          continue;
    }
   
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`${alarm} seconds are up!`);
    }, alarm * 1000);
  }

};

timer();