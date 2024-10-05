import { PhoneCall } from "lucide-react";

const Icons = {
  call: PhoneCall,
  check: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path
        d="M38.5 92.899a6.457 6.457 0 0 1-4.596-1.904l-30-30C2.676 59.769 2 58.136 2 56.399s.677-3.37 1.905-4.598l9.898-9.898C15.031 40.676 16.663 40 18.399 40s3.368.676 4.596 1.904L38.5 57.408l40.5-40.5c1.228-1.228 2.86-1.904 4.596-1.904s3.368.676 4.596 1.904l9.899 9.899c1.227 1.227 1.904 2.859 1.904 4.596s-.677 3.37-1.905 4.598L43.096 90.996a6.46 6.46 0 0 1-4.596 1.903z"
        opacity={0.35}
      />
      <path
        fill="#f2f2f2"
        d="M36.5 90.899a6.457 6.457 0 0 1-4.596-1.904l-30-30C.676 57.769 0 56.136 0 54.399s.677-3.37 1.905-4.598l9.898-9.898C13.031 38.676 14.663 38 16.399 38s3.368.676 4.596 1.904L36.5 55.408l40.5-40.5c1.228-1.228 2.86-1.904 4.596-1.904s3.368.676 4.596 1.904l9.899 9.899c1.227 1.227 1.904 2.859 1.904 4.596s-.677 3.37-1.905 4.598L41.096 88.996a6.46 6.46 0 0 1-4.596 1.903z"
      />
      <path
        fill="#96c362"
        d="m36.5 84.399-30-30 9.899-9.899L36.5 64.601l45.097-45.097 9.899 9.899z"
      />
      <path
        fill="none"
        stroke="#40396e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m36.5 84.399-30-30 9.899-9.899L36.5 64.601l45.097-45.097 9.899 9.899z"
      />
    </svg>
  ),
  cross: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path
        d="M27.601 93.022a6.46 6.46 0 0 1-4.584-1.892l-9.923-9.878c-2.536-2.523-2.549-6.643-.03-9.184L32.977 52l-19.94-20.095a6.51 6.51 0 0 1 .029-9.186l9.921-9.876c1.101-1.097 2.552-1.748 4.194-1.878l.207-.016h.208a6.456 6.456 0 0 1 4.59 1.92L52 32.839l19.743-19.897a6.462 6.462 0 0 1 4.591-1.922c1.752 0 3.381.672 4.607 1.892l9.923 9.878c2.536 2.523 2.549 6.643.03 9.184L70.893 52.118l19.9 20.056c2.521 2.542 2.637 6.544.101 9.068l-9.921 9.876a6.464 6.464 0 0 1-4.584 1.894 6.47 6.47 0 0 1-4.614-1.92L52 71.161l-19.785 19.94a6.462 6.462 0 0 1-4.592 1.922h-.022z"
        opacity={0.35}
      />
      <path
        fill="#f2f2f2"
        d="M25.601 91.022a6.46 6.46 0 0 1-4.584-1.892l-9.923-9.878c-2.536-2.523-2.549-6.643-.03-9.184L30.977 50l-19.94-20.095a6.51 6.51 0 0 1 .029-9.186l9.921-9.876c1.101-1.097 2.552-1.748 4.194-1.878l.207-.016h.208a6.456 6.456 0 0 1 4.59 1.92L50 30.839l19.743-19.897a6.462 6.462 0 0 1 4.591-1.922c1.752 0 3.381.672 4.607 1.892l9.923 9.878c2.536 2.523 2.549 6.643.03 9.184L69.023 50l19.9 20.056a6.51 6.51 0 0 1-.029 9.186l-9.921 9.876a6.464 6.464 0 0 1-4.584 1.894 6.47 6.47 0 0 1-4.614-1.92L50 69.161l-19.785 19.94a6.462 6.462 0 0 1-4.592 1.922h-.022z"
      />
      <path
        fill="#ff7575"
        d="m84.279 25.397-9.922-9.877L50 40.067 25.573 15.45l-9.922 9.877L40.134 50 15.679 74.645l9.922 9.877L50 59.933l24.388 24.578 9.922-9.877L59.866 50z"
      />
      <path
        fill="none"
        stroke="#40396e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m84.279 25.397-9.922-9.877L50 40.067 25.573 15.45l-9.922 9.877L40.134 50 15.679 74.645l9.922 9.877L50 59.933l24.388 24.578 9.922-9.877L59.866 50z"
      />
    </svg>
  ),
};

export function Icon({ size = 16, icon = "", iconColor, strokeWidth = 2 }) {
  const CurrentIcon = Icons[icon];

  if (!CurrentIcon) return null;

  return (
    <CurrentIcon
      size={size}
      color={iconColor}
      height={size}
      width={size}
      strokeWidth={strokeWidth}
    />
  );
}
