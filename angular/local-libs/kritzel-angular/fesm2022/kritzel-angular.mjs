import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElement as defineCustomElement$1 } from 'kritzel-stencil/dist/components/kritzel-awareness-cursors.js';
import { defineCustomElement as defineCustomElement$2 } from 'kritzel-stencil/dist/components/kritzel-back-to-content.js';
import { defineCustomElement as defineCustomElement$3 } from 'kritzel-stencil/dist/components/kritzel-button.js';
import { defineCustomElement as defineCustomElement$4 } from 'kritzel-stencil/dist/components/kritzel-current-user-dialog.js';
import { defineCustomElement as defineCustomElement$5 } from 'kritzel-stencil/dist/components/kritzel-dialog.js';
import { defineCustomElement as defineCustomElement$6 } from 'kritzel-stencil/dist/components/kritzel-editor.js';
import { defineCustomElement as defineCustomElement$7 } from 'kritzel-stencil/dist/components/kritzel-export.js';
import { defineCustomElement as defineCustomElement$8 } from 'kritzel-stencil/dist/components/kritzel-input.js';
import { defineCustomElement as defineCustomElement$9 } from 'kritzel-stencil/dist/components/kritzel-line-endings.js';
import { defineCustomElement as defineCustomElement$a } from 'kritzel-stencil/dist/components/kritzel-login-dialog.js';
import { defineCustomElement as defineCustomElement$b } from 'kritzel-stencil/dist/components/kritzel-master-detail.js';
import { defineCustomElement as defineCustomElement$c } from 'kritzel-stencil/dist/components/kritzel-numeric-input.js';
import { defineCustomElement as defineCustomElement$d } from 'kritzel-stencil/dist/components/kritzel-opacity-slider.js';
import { defineCustomElement as defineCustomElement$e } from 'kritzel-stencil/dist/components/kritzel-pill-tabs.js';
import { defineCustomElement as defineCustomElement$f } from 'kritzel-stencil/dist/components/kritzel-settings.js';
import { defineCustomElements } from 'kritzel-stencil/loader';
export { BroadcastSyncProvider, DEFAULT_BRUSH_CONFIG, DEFAULT_TEXT_CONFIG, HocuspocusSyncProvider, InMemorySyncProvider, IndexedDBSyncProvider, KritzelBrushTool, KritzelEraserTool, KritzelGroup, KritzelImage, KritzelImageTool, KritzelLine, KritzelLineTool, KritzelPath, KritzelSelectionTool, KritzelShape, KritzelShapeTool, KritzelText, KritzelTextTool, KritzelWorkspace, ShapeType, WebSocketSyncProvider } from 'kritzel-stencil';

/* eslint-disable */
/* tslint:disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
            /**
             * In the event that proxyInputs is called
             * multiple times re-defining these inputs
             * will cause an error to be thrown. As a result
             * we set configurable: true to indicate these
             * properties can be changed.
             */
            configurable: true,
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}

let KritzelAwarenessCursors = class KritzelAwarenessCursors {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelAwarenessCursors, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelAwarenessCursors, isStandalone: true, selector: "kritzel-awareness-cursors", inputs: { core: "core", edgeIndicatorPadding: "edgeIndicatorPadding", showEdgeIndicators: "showEdgeIndicators" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelAwarenessCursors = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$1,
        inputs: ['core', 'edgeIndicatorPadding', 'showEdgeIndicators']
    })
], KritzelAwarenessCursors);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelAwarenessCursors, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-awareness-cursors',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [{ name: 'core', required: true }, 'edgeIndicatorPadding', 'showEdgeIndicators'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let KritzelBackToContent = class KritzelBackToContent {
    constructor(c, r, z) {
        this.z = z;
        this.backToContent = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelBackToContent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelBackToContent, isStandalone: true, selector: "kritzel-back-to-content", inputs: { text: "text", visible: "visible" }, outputs: { backToContent: "backToContent" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelBackToContent = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$2,
        inputs: ['text', 'visible']
    })
], KritzelBackToContent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelBackToContent, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-back-to-content',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['text', 'visible'],
                    outputs: ['backToContent'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { backToContent: [{
                type: Output
            }] } });
let KritzelButton = class KritzelButton {
    constructor(c, r, z) {
        this.z = z;
        this.buttonClick = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelButton, isStandalone: true, selector: "kritzel-button", inputs: { disabled: "disabled", type: "type", variant: "variant" }, outputs: { buttonClick: "buttonClick" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelButton = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$3,
        inputs: ['disabled', 'type', 'variant']
    })
], KritzelButton);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'type', 'variant'],
                    outputs: ['buttonClick'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { buttonClick: [{
                type: Output
            }] } });
let KritzelCurrentUserDialog = class KritzelCurrentUserDialog {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelCurrentUserDialog, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelCurrentUserDialog, isStandalone: true, selector: "kritzel-current-user-dialog", inputs: { user: "user" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelCurrentUserDialog = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$4,
        inputs: ['user'],
        methods: ['open', 'close']
    })
], KritzelCurrentUserDialog);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelCurrentUserDialog, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-current-user-dialog',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['user'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let KritzelDialog = class KritzelDialog {
    constructor(c, r, z) {
        this.z = z;
        this.dialogOpen = new EventEmitter();
        this.dialogClose = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelDialog, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelDialog, isStandalone: true, selector: "kritzel-dialog", inputs: { autoFocus: "autoFocus", closable: "closable", closeOnBackdrop: "closeOnBackdrop", closeOnEscape: "closeOnEscape", contained: "contained", dialogTitle: "dialogTitle", fullscreenOnMobile: "fullscreenOnMobile", isOpen: "isOpen", size: "size", trapFocus: "trapFocus" }, outputs: { dialogOpen: "dialogOpen", dialogClose: "dialogClose" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelDialog = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$5,
        inputs: ['autoFocus', 'closable', 'closeOnBackdrop', 'closeOnEscape', 'contained', 'dialogTitle', 'fullscreenOnMobile', 'isOpen', 'size', 'trapFocus'],
        methods: ['open', 'close', 'focusFirstElement']
    })
], KritzelDialog);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelDialog, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-dialog',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autoFocus', 'closable', 'closeOnBackdrop', 'closeOnEscape', 'contained', 'dialogTitle', 'fullscreenOnMobile', 'isOpen', 'size', 'trapFocus'],
                    outputs: ['dialogOpen', 'dialogClose'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { dialogOpen: [{
                type: Output
            }], dialogClose: [{
                type: Output
            }] } });
let KritzelEditor = class KritzelEditor {
    constructor(c, r, z) {
        this.z = z;
        this.isReady = new EventEmitter();
        this.activeWorkspaceChange = new EventEmitter();
        this.objectsChange = new EventEmitter();
        this.objectsAdded = new EventEmitter();
        this.objectsRemoved = new EventEmitter();
        this.objectsUpdated = new EventEmitter();
        this.undoStateChange = new EventEmitter();
        this.themeChange = new EventEmitter();
        this.viewportChange = new EventEmitter();
        this.logout = new EventEmitter();
        this.login = new EventEmitter();
        this.isPublicChange = new EventEmitter();
        this.awarenessChange = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelEditor, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelEditor, isStandalone: true, selector: "kritzel-editor", inputs: { activeUsers: "activeUsers", activeWorkspaceId: "activeWorkspaceId", assetStorageConfig: "assetStorageConfig", controls: "controls", cursorTarget: "cursorTarget", customSvgIcons: "customSvgIcons", debugInfo: "debugInfo", editorId: "editorId", globalContextMenuItems: "globalContextMenuItems", isControlsVisible: "isControlsVisible", isLoading: "isLoading", isMoreMenuVisible: "isMoreMenuVisible", isUtilityPanelVisible: "isUtilityPanelVisible", isWorkspaceManagerVisible: "isWorkspaceManagerVisible", lockDrawingScale: "lockDrawingScale", loginConfig: "loginConfig", objectContextMenuItems: "objectContextMenuItems", scaleMax: "scaleMax", scaleMin: "scaleMin", syncConfig: "syncConfig", user: "user", viewportBoundaryBottom: "viewportBoundaryBottom", viewportBoundaryLeft: "viewportBoundaryLeft", viewportBoundaryRight: "viewportBoundaryRight", viewportBoundaryTop: "viewportBoundaryTop", wheelEnabled: "wheelEnabled" }, outputs: { isReady: "isReady", activeWorkspaceChange: "activeWorkspaceChange", objectsChange: "objectsChange", objectsAdded: "objectsAdded", objectsRemoved: "objectsRemoved", objectsUpdated: "objectsUpdated", undoStateChange: "undoStateChange", themeChange: "themeChange", viewportChange: "viewportChange", logout: "logout", login: "login", isPublicChange: "isPublicChange", awarenessChange: "awarenessChange" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelEditor = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$6,
        inputs: ['activeUsers', 'activeWorkspaceId', 'assetStorageConfig', 'controls', 'cursorTarget', 'customSvgIcons', 'debugInfo', 'editorId', 'globalContextMenuItems', 'isControlsVisible', 'isLoading', 'isMoreMenuVisible', 'isUtilityPanelVisible', 'isWorkspaceManagerVisible', 'lockDrawingScale', 'loginConfig', 'objectContextMenuItems', 'scaleMax', 'scaleMin', 'syncConfig', 'user', 'viewportBoundaryBottom', 'viewportBoundaryLeft', 'viewportBoundaryRight', 'viewportBoundaryTop', 'wheelEnabled'],
        methods: ['getObjectById', 'addObject', 'updateObject', 'removeObject', 'getSelectedObjects', 'selectObjects', 'selectAllObjectsInViewport', 'clearSelection', 'centerObjectInViewport', 'backToContent', 'centerAllObjects', 'setViewport', 'panTo', 'zoomTo', 'getViewport', 'screenToWorld', 'worldToScreen', 'createWorkspace', 'updateWorkspace', 'deleteWorkspace', 'getWorkspaces', 'getActiveWorkspace', 'loadSharedWorkspace', 'reinitSync', 'registerTool', 'changeActiveTool', 'disable', 'enable', 'copy', 'cut', 'paste', 'delete', 'bringForward', 'sendBackward', 'bringToFront', 'sendToBack', 'alignObjects', 'group', 'ungroup', 'undo', 'redo', 'getScreenshot', 'exportViewportAsPng', 'exportViewportAsSvg', 'downloadAsJson', 'importFromFile', 'loadObjectsFromJson', 'getObjectsTotalCount', 'getAllObjects', 'findObjects', 'getCopiedObjects', 'getObjectsInViewport', 'hideContextMenu', 'triggerSelectionChange', 'getDisplayableShortcuts', 'openLoginDialog', 'setLoginLoading']
    })
], KritzelEditor);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelEditor, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-editor',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['activeUsers', 'activeWorkspaceId', 'assetStorageConfig', 'controls', 'cursorTarget', 'customSvgIcons', 'debugInfo', 'editorId', 'globalContextMenuItems', 'isControlsVisible', 'isLoading', 'isMoreMenuVisible', 'isUtilityPanelVisible', 'isWorkspaceManagerVisible', 'lockDrawingScale', 'loginConfig', 'objectContextMenuItems', 'scaleMax', 'scaleMin', 'syncConfig', 'user', 'viewportBoundaryBottom', 'viewportBoundaryLeft', 'viewportBoundaryRight', 'viewportBoundaryTop', 'wheelEnabled'],
                    outputs: ['isReady', 'activeWorkspaceChange', 'objectsChange', 'objectsAdded', 'objectsRemoved', 'objectsUpdated', 'undoStateChange', 'themeChange', 'viewportChange', 'logout', 'login', 'isPublicChange', 'awarenessChange'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { isReady: [{
                type: Output
            }], activeWorkspaceChange: [{
                type: Output
            }], objectsChange: [{
                type: Output
            }], objectsAdded: [{
                type: Output
            }], objectsRemoved: [{
                type: Output
            }], objectsUpdated: [{
                type: Output
            }], undoStateChange: [{
                type: Output
            }], themeChange: [{
                type: Output
            }], viewportChange: [{
                type: Output
            }], logout: [{
                type: Output
            }], login: [{
                type: Output
            }], isPublicChange: [{
                type: Output
            }], awarenessChange: [{
                type: Output
            }] } });
let KritzelExport = class KritzelExport {
    constructor(c, r, z) {
        this.z = z;
        this.exportPng = new EventEmitter();
        this.exportSvg = new EventEmitter();
        this.exportJson = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelExport, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelExport, isStandalone: true, selector: "kritzel-export", inputs: { workspaceName: "workspaceName" }, outputs: { exportPng: "exportPng", exportSvg: "exportSvg", exportJson: "exportJson" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelExport = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$7,
        inputs: ['workspaceName'],
        methods: ['open']
    })
], KritzelExport);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelExport, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-export',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['workspaceName'],
                    outputs: ['exportPng', 'exportSvg', 'exportJson'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { exportPng: [{
                type: Output
            }], exportSvg: [{
                type: Output
            }], exportJson: [{
                type: Output
            }] } });
let KritzelInput = class KritzelInput {
    constructor(c, r, z) {
        this.z = z;
        this.valueChange = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelInput, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelInput, isStandalone: true, selector: "kritzel-input", inputs: { disabled: "disabled", label: "label", placeholder: "placeholder", suffix: "suffix", type: "type", value: "value" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelInput = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$8,
        inputs: ['disabled', 'label', 'placeholder', 'suffix', 'type', 'value']
    })
], KritzelInput);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-input',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'label', 'placeholder', 'suffix', 'type', 'value'],
                    outputs: ['valueChange'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { valueChange: [{
                type: Output
            }] } });
let KritzelLineEndings = class KritzelLineEndings {
    constructor(c, r, z) {
        this.z = z;
        this.valueChange = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelLineEndings, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelLineEndings, isStandalone: true, selector: "kritzel-line-endings", inputs: { styles: "styles", value: "value" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelLineEndings = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$9,
        inputs: ['styles', 'value']
    })
], KritzelLineEndings);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelLineEndings, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-line-endings',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['styles', 'value'],
                    outputs: ['valueChange'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { valueChange: [{
                type: Output
            }] } });
let KritzelLoginDialog = class KritzelLoginDialog {
    constructor(c, r, z) {
        this.z = z;
        this.providerLogin = new EventEmitter();
        this.dialogClosed = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelLoginDialog, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelLoginDialog, isStandalone: true, selector: "kritzel-login-dialog", inputs: { dialogTitle: "dialogTitle", providers: "providers", subtitle: "subtitle" }, outputs: { providerLogin: "providerLogin", dialogClosed: "dialogClosed" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelLoginDialog = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$a,
        inputs: ['dialogTitle', 'providers', 'subtitle'],
        methods: ['open', 'close', 'setLoading']
    })
], KritzelLoginDialog);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelLoginDialog, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-login-dialog',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['dialogTitle', 'providers', 'subtitle'],
                    outputs: ['providerLogin', 'dialogClosed'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { providerLogin: [{
                type: Output
            }], dialogClosed: [{
                type: Output
            }] } });
let KritzelMasterDetail = class KritzelMasterDetail {
    constructor(c, r, z) {
        this.z = z;
        this.itemSelect = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelMasterDetail, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelMasterDetail, isStandalone: true, selector: "kritzel-master-detail", inputs: { items: "items", selectedItemId: "selectedItemId" }, outputs: { itemSelect: "itemSelect" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelMasterDetail = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$b,
        inputs: ['items', 'selectedItemId']
    })
], KritzelMasterDetail);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelMasterDetail, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-master-detail',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['items', 'selectedItemId'],
                    outputs: ['itemSelect'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { itemSelect: [{
                type: Output
            }] } });
let KritzelNumericInput = class KritzelNumericInput {
    constructor(c, r, z) {
        this.z = z;
        this.valueChange = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelNumericInput, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelNumericInput, isStandalone: true, selector: "kritzel-numeric-input", inputs: { label: "label", max: "max", min: "min", placeholder: "placeholder", step: "step", value: "value" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelNumericInput = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$c,
        inputs: ['label', 'max', 'min', 'placeholder', 'step', 'value']
    })
], KritzelNumericInput);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelNumericInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-numeric-input',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['label', 'max', 'min', 'placeholder', 'step', 'value'],
                    outputs: ['valueChange'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { valueChange: [{
                type: Output
            }] } });
let KritzelOpacitySlider = class KritzelOpacitySlider {
    constructor(c, r, z) {
        this.z = z;
        this.valueChange = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelOpacitySlider, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelOpacitySlider, isStandalone: true, selector: "kritzel-opacity-slider", inputs: { max: "max", min: "min", previewColor: "previewColor", step: "step", value: "value" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelOpacitySlider = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$d,
        inputs: ['max', 'min', 'previewColor', 'step', 'value']
    })
], KritzelOpacitySlider);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelOpacitySlider, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-opacity-slider',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['max', 'min', 'previewColor', 'step', 'value'],
                    outputs: ['valueChange'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { valueChange: [{
                type: Output
            }] } });
let KritzelPillTabs = class KritzelPillTabs {
    constructor(c, r, z) {
        this.z = z;
        this.valueChange = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelPillTabs, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelPillTabs, isStandalone: true, selector: "kritzel-pill-tabs", inputs: { tabs: "tabs", value: "value" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelPillTabs = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$e,
        inputs: ['tabs', 'value']
    })
], KritzelPillTabs);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelPillTabs, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-pill-tabs',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['tabs', 'value'],
                    outputs: ['valueChange'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { valueChange: [{
                type: Output
            }] } });
let KritzelSettings = class KritzelSettings {
    constructor(c, r, z) {
        this.z = z;
        this.settingsChange = new EventEmitter();
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelSettings, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.9", type: KritzelSettings, isStandalone: true, selector: "kritzel-settings", inputs: { settings: "settings", shortcuts: "shortcuts" }, outputs: { settingsChange: "settingsChange" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
KritzelSettings = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$f,
        inputs: ['settings', 'shortcuts'],
        methods: ['open']
    })
], KritzelSettings);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: KritzelSettings, decorators: [{
            type: Component,
            args: [{
                    selector: 'kritzel-settings',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['settings', 'shortcuts'],
                    outputs: ['settingsChange'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { settingsChange: [{
                type: Output
            }] } });

const DIRECTIVES = [
    KritzelAwarenessCursors,
    KritzelBackToContent,
    KritzelButton,
    KritzelCurrentUserDialog,
    KritzelDialog,
    KritzelEditor,
    KritzelExport,
    KritzelInput,
    KritzelLineEndings,
    KritzelLoginDialog,
    KritzelMasterDetail,
    KritzelNumericInput,
    KritzelOpacitySlider,
    KritzelPillTabs,
    KritzelSettings
];

function provideKritzel() {
    return makeEnvironmentProviders([
        provideAppInitializer(() => {
            console.info('Initializing Kritzel custom elements');
            return defineCustomElements(window);
        }),
    ]);
}

/**
 * Generated bundle index. Do not edit.
 */

export { DIRECTIVES, KritzelAwarenessCursors, KritzelBackToContent, KritzelButton, KritzelCurrentUserDialog, KritzelDialog, KritzelEditor, KritzelExport, KritzelInput, KritzelLineEndings, KritzelLoginDialog, KritzelMasterDetail, KritzelNumericInput, KritzelOpacitySlider, KritzelPillTabs, KritzelSettings, provideKritzel };
//# sourceMappingURL=kritzel-angular.mjs.map
