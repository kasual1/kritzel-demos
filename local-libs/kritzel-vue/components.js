/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from '@stencil/vue-output-target/runtime';
import { defineCustomElement as defineKritzelAwarenessCursors } from '../../kritzel-stencil/dist/components/kritzel-awareness-cursors.js';
import { defineCustomElement as defineKritzelBackToContent } from '../../kritzel-stencil/dist/components/kritzel-back-to-content.js';
import { defineCustomElement as defineKritzelButton } from '../../kritzel-stencil/dist/components/kritzel-button.js';
import { defineCustomElement as defineKritzelCurrentUserDialog } from '../../kritzel-stencil/dist/components/kritzel-current-user-dialog.js';
import { defineCustomElement as defineKritzelDialog } from '../../kritzel-stencil/dist/components/kritzel-dialog.js';
import { defineCustomElement as defineKritzelEditor } from '../../kritzel-stencil/dist/components/kritzel-editor.js';
import { defineCustomElement as defineKritzelExport } from '../../kritzel-stencil/dist/components/kritzel-export.js';
import { defineCustomElement as defineKritzelInput } from '../../kritzel-stencil/dist/components/kritzel-input.js';
import { defineCustomElement as defineKritzelLineEndings } from '../../kritzel-stencil/dist/components/kritzel-line-endings.js';
import { defineCustomElement as defineKritzelLoginDialog } from '../../kritzel-stencil/dist/components/kritzel-login-dialog.js';
import { defineCustomElement as defineKritzelMasterDetail } from '../../kritzel-stencil/dist/components/kritzel-master-detail.js';
import { defineCustomElement as defineKritzelNumericInput } from '../../kritzel-stencil/dist/components/kritzel-numeric-input.js';
import { defineCustomElement as defineKritzelOpacitySlider } from '../../kritzel-stencil/dist/components/kritzel-opacity-slider.js';
import { defineCustomElement as defineKritzelPillTabs } from '../../kritzel-stencil/dist/components/kritzel-pill-tabs.js';
import { defineCustomElement as defineKritzelSettings } from '../../kritzel-stencil/dist/components/kritzel-settings.js';
export const KritzelAwarenessCursors = /*@__PURE__*/ defineContainer('kritzel-awareness-cursors', defineKritzelAwarenessCursors, [
    'core',
    'showEdgeIndicators',
    'edgeIndicatorPadding'
]);
export const KritzelBackToContent = /*@__PURE__*/ defineContainer('kritzel-back-to-content', defineKritzelBackToContent, [
    'visible',
    'text',
    'backToContent'
], [
    'backToContent'
]);
export const KritzelButton = /*@__PURE__*/ defineContainer('kritzel-button', defineKritzelButton, [
    'variant',
    'disabled',
    'type',
    'buttonClick'
], [
    'buttonClick'
]);
export const KritzelCurrentUserDialog = /*@__PURE__*/ defineContainer('kritzel-current-user-dialog', defineKritzelCurrentUserDialog, [
    'user'
]);
export const KritzelDialog = /*@__PURE__*/ defineContainer('kritzel-dialog', defineKritzelDialog, [
    'isOpen',
    'dialogTitle',
    'closable',
    'closeOnBackdrop',
    'closeOnEscape',
    'autoFocus',
    'trapFocus',
    'size',
    'fullscreenOnMobile',
    'contained',
    'dialogOpen',
    'dialogClose'
], [
    'dialogOpen',
    'dialogClose'
]);
export const KritzelEditor = /*@__PURE__*/ defineContainer('kritzel-editor', defineKritzelEditor, [
    'scaleMax',
    'scaleMin',
    'lockDrawingScale',
    'viewportBoundaryLeft',
    'viewportBoundaryRight',
    'viewportBoundaryTop',
    'viewportBoundaryBottom',
    'wheelEnabled',
    'debugInfo',
    'user',
    'activeUsers',
    'controls',
    'globalContextMenuItems',
    'objectContextMenuItems',
    'customSvgIcons',
    'isControlsVisible',
    'isUtilityPanelVisible',
    'isWorkspaceManagerVisible',
    'isMoreMenuVisible',
    'syncConfig',
    'assetStorageConfig',
    'cursorTarget',
    'loginConfig',
    'isLoading',
    'editorId',
    'activeWorkspaceId',
    'isReady',
    'activeWorkspaceChange',
    'objectsChange',
    'objectsAdded',
    'objectsRemoved',
    'objectsUpdated',
    'undoStateChange',
    'themeChange',
    'viewportChange',
    'logout',
    'login',
    'isPublicChange',
    'awarenessChange'
], [
    'isReady',
    'activeWorkspaceChange',
    'objectsChange',
    'objectsAdded',
    'objectsRemoved',
    'objectsUpdated',
    'undoStateChange',
    'themeChange',
    'viewportChange',
    'logout',
    'login',
    'isPublicChange',
    'awarenessChange'
]);
export const KritzelExport = /*@__PURE__*/ defineContainer('kritzel-export', defineKritzelExport, [
    'workspaceName',
    'exportPng',
    'exportSvg',
    'exportJson'
], [
    'exportPng',
    'exportSvg',
    'exportJson'
]);
export const KritzelInput = /*@__PURE__*/ defineContainer('kritzel-input', defineKritzelInput, [
    'value',
    'label',
    'placeholder',
    'suffix',
    'type',
    'disabled',
    'valueChange'
], [
    'valueChange'
]);
export const KritzelLineEndings = /*@__PURE__*/ defineContainer('kritzel-line-endings', defineKritzelLineEndings, [
    'styles',
    'value',
    'valueChange'
], [
    'valueChange'
]);
export const KritzelLoginDialog = /*@__PURE__*/ defineContainer('kritzel-login-dialog', defineKritzelLoginDialog, [
    'providers',
    'dialogTitle',
    'subtitle',
    'providerLogin',
    'dialogClosed'
], [
    'providerLogin',
    'dialogClosed'
]);
export const KritzelMasterDetail = /*@__PURE__*/ defineContainer('kritzel-master-detail', defineKritzelMasterDetail, [
    'items',
    'selectedItemId',
    'itemSelect'
], [
    'itemSelect'
]);
export const KritzelNumericInput = /*@__PURE__*/ defineContainer('kritzel-numeric-input', defineKritzelNumericInput, [
    'value',
    'min',
    'max',
    'step',
    'label',
    'placeholder',
    'valueChange'
], [
    'valueChange'
]);
export const KritzelOpacitySlider = /*@__PURE__*/ defineContainer('kritzel-opacity-slider', defineKritzelOpacitySlider, [
    'value',
    'min',
    'max',
    'step',
    'previewColor',
    'valueChange'
], [
    'valueChange'
]);
export const KritzelPillTabs = /*@__PURE__*/ defineContainer('kritzel-pill-tabs', defineKritzelPillTabs, [
    'tabs',
    'value',
    'valueChange'
], [
    'valueChange'
]);
export const KritzelSettings = /*@__PURE__*/ defineContainer('kritzel-settings', defineKritzelSettings, [
    'shortcuts',
    'settings',
    'settingsChange'
], [
    'settingsChange'
]);
