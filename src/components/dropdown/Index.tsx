import DropDownPicker from "react-native-dropdown-picker";
import { Label } from "./Styles";

interface DropdownProps {
  text: string;
  open: boolean;
  value: any;
  items: any;
  setOpen: any;
  setValue: any;
  setItems: any;
}

export function Dropdown(props: DropdownProps) {
  return (
    <>
      <Label>{props.text}</Label>
      <DropDownPicker
        placeholder="Selecione uma cor"
        open={props.open}
        value={props.value}
        items={props.items}
        setOpen={props.setOpen}
        setValue={props.setValue}
        setItems={props.setItems}
      />
    </>
  );
}
