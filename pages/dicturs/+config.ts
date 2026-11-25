import type { Config } from 'vike/types'

export default {
  title: 'Dicturs — run commands with your voice',
  description:
    'Dicturs runs your shell commands when you say a keyword. Offline speech recognition (whisper.cpp), CLI, terminal and desktop apps, wofi/rofi integration.',
  // Full page loads to and from this page, so its CSS and theme never mix with the rest of gallifree.app.
  clientRouting: false,
} satisfies Config
