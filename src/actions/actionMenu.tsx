import { Action } from "./types";
import React from "react";
import { menu, palette } from "../components/icons";
import { ToolButton } from "../components/ToolButton";
import { t } from "../i18n";
import { showSelectedShapeActions } from "../element";

export const actionToggleCanvasMenu: Action = {
  name: "toggleCanvasMenu",
  perform: (_, appState) => ({
    appState: {
      ...appState,
      openedMenu: appState.openedMenu === "canvas" ? null : "canvas",
    },
  }),
  PanelComponent: ({ updateData }) => (
    <ToolButton
      type="button"
      icon={menu}
      aria-label={t("buttons.menu")}
      onClick={updateData}
    />
  ),
};

export const actionToggleEditMenu: Action = {
  name: "toggleEditMenu",
  perform: (_elements, appState) => ({
    appState: {
      ...appState,
      openedMenu: appState.openedMenu === "shape" ? null : "shape",
    },
  }),
  PanelComponent: ({ elements, appState, updateData }) => (
    <ToolButton
      visible={showSelectedShapeActions(appState, elements)}
      type="button"
      icon={palette}
      aria-label={t("buttons.edit")}
      onClick={updateData}
    />
  ),
};