export const displayFancyLogs = () => {
  console.log(
    "%c  ____  _           _     _       ____                          _\n / ___|| |__  _   _| |__ | |__   |  _ \\ ___  _ ____      ____ _| |\n \\___ \\| '_ \\| | | | '_ \\| '_ \\  | |_) / _ \\| '__\\ \\ /\\ / / _` | |\n  ___) | | | | |_| | |_) | | | | |  __/ (_) | |   \\ V  V / (_| | |\n |____/|_| |_|\\__,_|_.__/|_| |_| |_|   \\___/|_|    \\_/\\_/ \\__,_|_|\n",
    "color: #6b17e8;"
  );

  console.log(
    "%c J'espère que tu aimes ce que tu vois :)",
    "color: #6b17e8; padding: 6px;"
  );

  // Easter egg hint
  console.log(
    "%c 💡 Psst! J'espère que l'on pourra apprendre à se connaître dans le monde du développement, moi c'est C.O.F 13!!!",
    "color: #6b17e8; font-style: italic; padding: 6px;"
  );
};
