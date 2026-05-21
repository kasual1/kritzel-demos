'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { KritzelAwarenessCursors as KritzelAwarenessCursorsElement, defineCustomElement as defineKritzelAwarenessCursors } from "../../../../kritzel-stencil/dist/components/kritzel-awareness-cursors.js";
import { KritzelBackToContent as KritzelBackToContentElement, defineCustomElement as defineKritzelBackToContent } from "../../../../kritzel-stencil/dist/components/kritzel-back-to-content.js";
import { KritzelButton as KritzelButtonElement, defineCustomElement as defineKritzelButton } from "../../../../kritzel-stencil/dist/components/kritzel-button.js";
import { KritzelCurrentUserDialog as KritzelCurrentUserDialogElement, defineCustomElement as defineKritzelCurrentUserDialog } from "../../../../kritzel-stencil/dist/components/kritzel-current-user-dialog.js";
import { KritzelDialog as KritzelDialogElement, defineCustomElement as defineKritzelDialog } from "../../../../kritzel-stencil/dist/components/kritzel-dialog.js";
import { KritzelEditor as KritzelEditorElement, defineCustomElement as defineKritzelEditor } from "../../../../kritzel-stencil/dist/components/kritzel-editor.js";
import { KritzelExport as KritzelExportElement, defineCustomElement as defineKritzelExport } from "../../../../kritzel-stencil/dist/components/kritzel-export.js";
import { KritzelInput as KritzelInputElement, defineCustomElement as defineKritzelInput } from "../../../../kritzel-stencil/dist/components/kritzel-input.js";
import { KritzelLineEndings as KritzelLineEndingsElement, defineCustomElement as defineKritzelLineEndings } from "../../../../kritzel-stencil/dist/components/kritzel-line-endings.js";
import { KritzelLoginDialog as KritzelLoginDialogElement, defineCustomElement as defineKritzelLoginDialog } from "../../../../kritzel-stencil/dist/components/kritzel-login-dialog.js";
import { KritzelMasterDetail as KritzelMasterDetailElement, defineCustomElement as defineKritzelMasterDetail } from "../../../../kritzel-stencil/dist/components/kritzel-master-detail.js";
import { KritzelNumericInput as KritzelNumericInputElement, defineCustomElement as defineKritzelNumericInput } from "../../../../kritzel-stencil/dist/components/kritzel-numeric-input.js";
import { KritzelOpacitySlider as KritzelOpacitySliderElement, defineCustomElement as defineKritzelOpacitySlider } from "../../../../kritzel-stencil/dist/components/kritzel-opacity-slider.js";
import { KritzelPillTabs as KritzelPillTabsElement, defineCustomElement as defineKritzelPillTabs } from "../../../../kritzel-stencil/dist/components/kritzel-pill-tabs.js";
import { KritzelSettings as KritzelSettingsElement, defineCustomElement as defineKritzelSettings } from "../../../../kritzel-stencil/dist/components/kritzel-settings.js";
export const KritzelAwarenessCursors = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-awareness-cursors',
    elementClass: KritzelAwarenessCursorsElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineKritzelAwarenessCursors
});
export const KritzelBackToContent = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-back-to-content',
    elementClass: KritzelBackToContentElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBackToContent: 'backToContent' },
    defineCustomElement: defineKritzelBackToContent
});
export const KritzelButton = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-button',
    elementClass: KritzelButtonElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onButtonClick: 'buttonClick' },
    defineCustomElement: defineKritzelButton
});
export const KritzelCurrentUserDialog = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-current-user-dialog',
    elementClass: KritzelCurrentUserDialogElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineKritzelCurrentUserDialog
});
export const KritzelDialog = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-dialog',
    elementClass: KritzelDialogElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onDialogOpen: 'dialogOpen',
        onDialogClose: 'dialogClose'
    },
    defineCustomElement: defineKritzelDialog
});
export const KritzelEditor = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-editor',
    elementClass: KritzelEditorElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onIsReady: 'isReady',
        onActiveWorkspaceChange: 'activeWorkspaceChange',
        onObjectsChange: 'objectsChange',
        onObjectsAdded: 'objectsAdded',
        onObjectsRemoved: 'objectsRemoved',
        onObjectsUpdated: 'objectsUpdated',
        onUndoStateChange: 'undoStateChange',
        onThemeChange: 'themeChange',
        onViewportChange: 'viewportChange',
        onLogout: 'logout',
        onLogin: 'login',
        onIsPublicChange: 'isPublicChange',
        onAwarenessChange: 'awarenessChange'
    },
    defineCustomElement: defineKritzelEditor
});
export const KritzelExport = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-export',
    elementClass: KritzelExportElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onExportPng: 'exportPng',
        onExportSvg: 'exportSvg',
        onExportJson: 'exportJson'
    },
    defineCustomElement: defineKritzelExport
});
export const KritzelInput = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-input',
    elementClass: KritzelInputElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onValueChange: 'valueChange' },
    defineCustomElement: defineKritzelInput
});
export const KritzelLineEndings = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-line-endings',
    elementClass: KritzelLineEndingsElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onValueChange: 'valueChange' },
    defineCustomElement: defineKritzelLineEndings
});
export const KritzelLoginDialog = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-login-dialog',
    elementClass: KritzelLoginDialogElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onProviderLogin: 'providerLogin',
        onDialogClosed: 'dialogClosed'
    },
    defineCustomElement: defineKritzelLoginDialog
});
export const KritzelMasterDetail = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-master-detail',
    elementClass: KritzelMasterDetailElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onItemSelect: 'itemSelect' },
    defineCustomElement: defineKritzelMasterDetail
});
export const KritzelNumericInput = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-numeric-input',
    elementClass: KritzelNumericInputElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onValueChange: 'valueChange' },
    defineCustomElement: defineKritzelNumericInput
});
export const KritzelOpacitySlider = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-opacity-slider',
    elementClass: KritzelOpacitySliderElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onValueChange: 'valueChange' },
    defineCustomElement: defineKritzelOpacitySlider
});
export const KritzelPillTabs = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-pill-tabs',
    elementClass: KritzelPillTabsElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onValueChange: 'valueChange' },
    defineCustomElement: defineKritzelPillTabs
});
export const KritzelSettings = /*@__PURE__*/ createComponent({
    tagName: 'kritzel-settings',
    elementClass: KritzelSettingsElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onSettingsChange: 'settingsChange' },
    defineCustomElement: defineKritzelSettings
});
