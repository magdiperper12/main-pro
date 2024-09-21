declare module "emoji-picker-react" {
  export interface Emoji {
    emoji: string;
  }

  export interface EmojiClickData {
    emoji: Emoji;
  }

  export interface PickerProps {
    onEmojiClick: (emoji: EmojiClickData, event: React.MouseEvent) => void;
    // Add any other props you might need to use here
  }

  const Picker: React.FC<PickerProps>;
  export default Picker;
}
