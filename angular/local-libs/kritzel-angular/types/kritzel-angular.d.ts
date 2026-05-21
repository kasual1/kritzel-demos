import * as i0 from '@angular/core';
import { NgZone, ChangeDetectorRef, ElementRef, EventEmitter, EnvironmentProviders } from '@angular/core';
import { Components, IKritzelDialogCloseEvent, EditorIsReadyEvent, ActiveWorkspaceChangeEvent, KritzelBaseObject, ObjectsAddedEvent, ObjectsRemovedEvent, ObjectsUpdatedEvent, KritzelUndoState, ThemeName, KritzelViewportState, LoginEvent, IKritzelIsPublicChangedEvent, LineArrowConfig, IKritzelMasterDetailSelectEvent, KritzelSettingsConfig } from 'kritzel-stencil/dist/components';
export { ActiveWorkspaceChangeEvent, BroadcastSyncProvider, DEFAULT_BRUSH_CONFIG, DEFAULT_TEXT_CONFIG, EditorIsReadyEvent, HocuspocusSyncProvider, InMemorySyncProvider, IndexedDBSyncProvider, KritzelBrushTool, KritzelEraserTool, KritzelGroup, KritzelImage, KritzelImageTool, KritzelLine, KritzelLineTool, KritzelPath, KritzelSelectionTool, KritzelShape, KritzelShapeTool, KritzelSyncConfig, KritzelText, KritzelTextTool, KritzelToolbarControl, KritzelWorkspace, LoginEvent, ShapeType, WebSocketSyncProvider } from 'kritzel-stencil';

declare class KritzelAwarenessCursors {
    protected z: NgZone;
    protected el: HTMLKritzelAwarenessCursorsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelAwarenessCursors, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelAwarenessCursors, "kritzel-awareness-cursors", never, { "core": { "alias": "core"; "required": true; }; "edgeIndicatorPadding": { "alias": "edgeIndicatorPadding"; "required": false; }; "showEdgeIndicators": { "alias": "showEdgeIndicators"; "required": false; }; }, {}, never, ["*"], true, never>;
}
declare interface KritzelAwarenessCursors extends Components.KritzelAwarenessCursors {
}
declare class KritzelBackToContent {
    protected z: NgZone;
    protected el: HTMLKritzelBackToContentElement;
    backToContent: EventEmitter<CustomEvent<void>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelBackToContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelBackToContent, "kritzel-back-to-content", never, { "text": { "alias": "text"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, { "backToContent": "backToContent"; }, never, ["*"], true, never>;
}
declare interface KritzelBackToContent extends Components.KritzelBackToContent {
    /**
     * Emitted when the button is clicked
     */
    backToContent: EventEmitter<CustomEvent<void>>;
}
declare class KritzelButton {
    protected z: NgZone;
    protected el: HTMLKritzelButtonElement;
    buttonClick: EventEmitter<CustomEvent<void>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelButton, "kritzel-button", never, { "disabled": { "alias": "disabled"; "required": false; }; "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, { "buttonClick": "buttonClick"; }, never, ["*"], true, never>;
}
declare interface KritzelButton extends Components.KritzelButton {
    /**
     * Emitted when the button is clicked
     */
    buttonClick: EventEmitter<CustomEvent<void>>;
}
declare class KritzelCurrentUserDialog {
    protected z: NgZone;
    protected el: HTMLKritzelCurrentUserDialogElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelCurrentUserDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelCurrentUserDialog, "kritzel-current-user-dialog", never, { "user": { "alias": "user"; "required": false; }; }, {}, never, ["*"], true, never>;
}
declare interface KritzelCurrentUserDialog extends Components.KritzelCurrentUserDialog {
}
declare class KritzelDialog {
    protected z: NgZone;
    protected el: HTMLKritzelDialogElement;
    dialogOpen: EventEmitter<CustomEvent<void>>;
    dialogClose: EventEmitter<CustomEvent<IKritzelDialogCloseEvent>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelDialog, "kritzel-dialog", never, { "autoFocus": { "alias": "autoFocus"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "closeOnBackdrop": { "alias": "closeOnBackdrop"; "required": false; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; }; "contained": { "alias": "contained"; "required": false; }; "dialogTitle": { "alias": "dialogTitle"; "required": false; }; "fullscreenOnMobile": { "alias": "fullscreenOnMobile"; "required": false; }; "isOpen": { "alias": "isOpen"; "required": false; }; "size": { "alias": "size"; "required": false; }; "trapFocus": { "alias": "trapFocus"; "required": false; }; }, { "dialogOpen": "dialogOpen"; "dialogClose": "dialogClose"; }, never, ["*"], true, never>;
}
declare interface KritzelDialog extends Components.KritzelDialog {
    /**
     * Emitted when the dialog opens
     */
    dialogOpen: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the dialog closes
     */
    dialogClose: EventEmitter<CustomEvent<IKritzelDialogCloseEvent>>;
}
declare class KritzelEditor {
    protected z: NgZone;
    protected el: HTMLKritzelEditorElement;
    isReady: EventEmitter<CustomEvent<EditorIsReadyEvent>>;
    activeWorkspaceChange: EventEmitter<CustomEvent<ActiveWorkspaceChangeEvent>>;
    objectsChange: EventEmitter<CustomEvent<KritzelBaseObject<HTMLElement | SVGElement>[]>>;
    objectsAdded: EventEmitter<CustomEvent<ObjectsAddedEvent>>;
    objectsRemoved: EventEmitter<CustomEvent<ObjectsRemovedEvent>>;
    objectsUpdated: EventEmitter<CustomEvent<ObjectsUpdatedEvent>>;
    undoStateChange: EventEmitter<CustomEvent<KritzelUndoState>>;
    themeChange: EventEmitter<CustomEvent<ThemeName>>;
    viewportChange: EventEmitter<CustomEvent<KritzelViewportState>>;
    logout: EventEmitter<CustomEvent<void>>;
    login: EventEmitter<CustomEvent<LoginEvent>>;
    isPublicChange: EventEmitter<CustomEvent<IKritzelIsPublicChangedEvent>>;
    awarenessChange: EventEmitter<CustomEvent<Map<number, Record<string, any>>>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelEditor, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelEditor, "kritzel-editor", never, { "activeUsers": { "alias": "activeUsers"; "required": false; }; "activeWorkspaceId": { "alias": "activeWorkspaceId"; "required": false; }; "assetStorageConfig": { "alias": "assetStorageConfig"; "required": false; }; "controls": { "alias": "controls"; "required": false; }; "cursorTarget": { "alias": "cursorTarget"; "required": false; }; "customSvgIcons": { "alias": "customSvgIcons"; "required": false; }; "debugInfo": { "alias": "debugInfo"; "required": false; }; "editorId": { "alias": "editorId"; "required": false; }; "globalContextMenuItems": { "alias": "globalContextMenuItems"; "required": false; }; "isControlsVisible": { "alias": "isControlsVisible"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "isMoreMenuVisible": { "alias": "isMoreMenuVisible"; "required": false; }; "isUtilityPanelVisible": { "alias": "isUtilityPanelVisible"; "required": false; }; "isWorkspaceManagerVisible": { "alias": "isWorkspaceManagerVisible"; "required": false; }; "lockDrawingScale": { "alias": "lockDrawingScale"; "required": false; }; "loginConfig": { "alias": "loginConfig"; "required": false; }; "objectContextMenuItems": { "alias": "objectContextMenuItems"; "required": false; }; "scaleMax": { "alias": "scaleMax"; "required": false; }; "scaleMin": { "alias": "scaleMin"; "required": false; }; "syncConfig": { "alias": "syncConfig"; "required": false; }; "user": { "alias": "user"; "required": false; }; "viewportBoundaryBottom": { "alias": "viewportBoundaryBottom"; "required": false; }; "viewportBoundaryLeft": { "alias": "viewportBoundaryLeft"; "required": false; }; "viewportBoundaryRight": { "alias": "viewportBoundaryRight"; "required": false; }; "viewportBoundaryTop": { "alias": "viewportBoundaryTop"; "required": false; }; "wheelEnabled": { "alias": "wheelEnabled"; "required": false; }; }, { "isReady": "isReady"; "activeWorkspaceChange": "activeWorkspaceChange"; "objectsChange": "objectsChange"; "objectsAdded": "objectsAdded"; "objectsRemoved": "objectsRemoved"; "objectsUpdated": "objectsUpdated"; "undoStateChange": "undoStateChange"; "themeChange": "themeChange"; "viewportChange": "viewportChange"; "logout": "logout"; "login": "login"; "isPublicChange": "isPublicChange"; "awarenessChange": "awarenessChange"; }, never, ["*"], true, never>;
}
declare interface KritzelEditor extends Components.KritzelEditor {
    isReady: EventEmitter<CustomEvent<EditorIsReadyEvent>>;
    activeWorkspaceChange: EventEmitter<CustomEvent<ActiveWorkspaceChangeEvent>>;
    objectsChange: EventEmitter<CustomEvent<KritzelBaseObject[]>>;
    objectsAdded: EventEmitter<CustomEvent<ObjectsAddedEvent>>;
    objectsRemoved: EventEmitter<CustomEvent<ObjectsRemovedEvent>>;
    objectsUpdated: EventEmitter<CustomEvent<ObjectsUpdatedEvent>>;
    undoStateChange: EventEmitter<CustomEvent<KritzelUndoState>>;
    themeChange: EventEmitter<CustomEvent<ThemeName>>;
    viewportChange: EventEmitter<CustomEvent<KritzelViewportState>>;
    logout: EventEmitter<CustomEvent<void>>;
    login: EventEmitter<CustomEvent<LoginEvent>>;
    isPublicChange: EventEmitter<CustomEvent<IKritzelIsPublicChangedEvent>>;
    awarenessChange: EventEmitter<CustomEvent<Map<number, Record<string, any>>>>;
}
declare class KritzelExport {
    protected z: NgZone;
    protected el: HTMLKritzelExportElement;
    exportPng: EventEmitter<CustomEvent<void>>;
    exportSvg: EventEmitter<CustomEvent<void>>;
    exportJson: EventEmitter<CustomEvent<string>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelExport, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelExport, "kritzel-export", never, { "workspaceName": { "alias": "workspaceName"; "required": false; }; }, { "exportPng": "exportPng"; "exportSvg": "exportSvg"; "exportJson": "exportJson"; }, never, ["*"], true, never>;
}
declare interface KritzelExport extends Components.KritzelExport {
    exportPng: EventEmitter<CustomEvent<void>>;
    exportSvg: EventEmitter<CustomEvent<void>>;
    exportJson: EventEmitter<CustomEvent<string>>;
}
declare class KritzelInput {
    protected z: NgZone;
    protected el: HTMLKritzelInputElement;
    valueChange: EventEmitter<CustomEvent<string>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelInput, "kritzel-input", never, { "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "suffix": { "alias": "suffix"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, ["*"], true, never>;
}
declare interface KritzelInput extends Components.KritzelInput {
    /**
     * Emitted when the value changes
     */
    valueChange: EventEmitter<CustomEvent<string>>;
}
declare class KritzelLineEndings {
    protected z: NgZone;
    protected el: HTMLKritzelLineEndingsElement;
    valueChange: EventEmitter<CustomEvent<LineArrowConfig>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelLineEndings, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelLineEndings, "kritzel-line-endings", never, { "styles": { "alias": "styles"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, ["*"], true, never>;
}
declare interface KritzelLineEndings extends Components.KritzelLineEndings {
    valueChange: EventEmitter<CustomEvent<LineArrowConfig>>;
}
declare class KritzelLoginDialog {
    protected z: NgZone;
    protected el: HTMLKritzelLoginDialogElement;
    providerLogin: EventEmitter<CustomEvent<LoginEvent>>;
    dialogClosed: EventEmitter<CustomEvent<void>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelLoginDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelLoginDialog, "kritzel-login-dialog", never, { "dialogTitle": { "alias": "dialogTitle"; "required": false; }; "providers": { "alias": "providers"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; }, { "providerLogin": "providerLogin"; "dialogClosed": "dialogClosed"; }, never, ["*"], true, never>;
}
declare interface KritzelLoginDialog extends Components.KritzelLoginDialog {
    /**
     * Emitted when a provider button is clicked
     */
    providerLogin: EventEmitter<CustomEvent<LoginEvent>>;
    /**
     * Emitted when the dialog is closed
     */
    dialogClosed: EventEmitter<CustomEvent<void>>;
}
declare class KritzelMasterDetail {
    protected z: NgZone;
    protected el: HTMLKritzelMasterDetailElement;
    itemSelect: EventEmitter<CustomEvent<IKritzelMasterDetailSelectEvent>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelMasterDetail, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelMasterDetail, "kritzel-master-detail", never, { "items": { "alias": "items"; "required": false; }; "selectedItemId": { "alias": "selectedItemId"; "required": false; }; }, { "itemSelect": "itemSelect"; }, never, ["*"], true, never>;
}
declare interface KritzelMasterDetail extends Components.KritzelMasterDetail {
    /**
     * Emitted when an item is selected
     */
    itemSelect: EventEmitter<CustomEvent<IKritzelMasterDetailSelectEvent>>;
}
declare class KritzelNumericInput {
    protected z: NgZone;
    protected el: HTMLKritzelNumericInputElement;
    valueChange: EventEmitter<CustomEvent<number | undefined>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelNumericInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelNumericInput, "kritzel-numeric-input", never, { "label": { "alias": "label"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "step": { "alias": "step"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, ["*"], true, never>;
}
declare interface KritzelNumericInput extends Components.KritzelNumericInput {
    /**
     * Emitted when the value changes (after normalization)
     */
    valueChange: EventEmitter<CustomEvent<number | undefined>>;
}
declare class KritzelOpacitySlider {
    protected z: NgZone;
    protected el: HTMLKritzelOpacitySliderElement;
    valueChange: EventEmitter<CustomEvent<number>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelOpacitySlider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelOpacitySlider, "kritzel-opacity-slider", never, { "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "previewColor": { "alias": "previewColor"; "required": false; }; "step": { "alias": "step"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, ["*"], true, never>;
}
declare interface KritzelOpacitySlider extends Components.KritzelOpacitySlider {
    valueChange: EventEmitter<CustomEvent<number>>;
}
declare class KritzelPillTabs {
    protected z: NgZone;
    protected el: HTMLKritzelPillTabsElement;
    valueChange: EventEmitter<CustomEvent<string>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelPillTabs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelPillTabs, "kritzel-pill-tabs", never, { "tabs": { "alias": "tabs"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, ["*"], true, never>;
}
declare interface KritzelPillTabs extends Components.KritzelPillTabs {
    /**
     * Emitted when the selected tab changes
     */
    valueChange: EventEmitter<CustomEvent<string>>;
}
declare class KritzelSettings {
    protected z: NgZone;
    protected el: HTMLKritzelSettingsElement;
    settingsChange: EventEmitter<CustomEvent<KritzelSettingsConfig>>;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<KritzelSettings, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KritzelSettings, "kritzel-settings", never, { "settings": { "alias": "settings"; "required": false; }; "shortcuts": { "alias": "shortcuts"; "required": false; }; }, { "settingsChange": "settingsChange"; }, never, ["*"], true, never>;
}
declare interface KritzelSettings extends Components.KritzelSettings {
    /**
     * Emitted when settings change
     */
    settingsChange: EventEmitter<CustomEvent<KritzelSettingsConfig>>;
}

declare const DIRECTIVES: (typeof KritzelAwarenessCursors | typeof KritzelBackToContent | typeof KritzelButton | typeof KritzelCurrentUserDialog | typeof KritzelDialog | typeof KritzelEditor | typeof KritzelExport | typeof KritzelInput | typeof KritzelLineEndings | typeof KritzelLoginDialog | typeof KritzelMasterDetail | typeof KritzelNumericInput | typeof KritzelOpacitySlider | typeof KritzelPillTabs | typeof KritzelSettings)[];

declare function provideKritzel(): EnvironmentProviders;

export { DIRECTIVES, KritzelAwarenessCursors, KritzelBackToContent, KritzelButton, KritzelCurrentUserDialog, KritzelDialog, KritzelEditor, KritzelExport, KritzelInput, KritzelLineEndings, KritzelLoginDialog, KritzelMasterDetail, KritzelNumericInput, KritzelOpacitySlider, KritzelPillTabs, KritzelSettings, provideKritzel };
