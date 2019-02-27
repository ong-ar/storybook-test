import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/Components/Button/index";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

stories.add("with text", () => <Button text={text("text", "text")} />);
