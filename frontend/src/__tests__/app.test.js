/**
 * Basic Application Tests
 * Uses Node.js built-in test runner with React server-side rendering
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import MainLayout from '../layouts/MainLayout.jsx';
import HomePage from '../pages/HomePage.jsx';
import SEO from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import FeatureCard from '../components/FeatureCard.jsx';

describe('Components', () => {
  it('renders SEO component without error', () => {
    const html = renderToString(
      React.createElement(SEO, { title: 'Test Page', description: 'Test description' })
    );
    // SEO component returns null (side effects only)
    assert.equal(html, '');
  });

  it('renders PageHeader with title and subtitle', () => {
    const html = renderToString(
      React.createElement(PageHeader, {
        title: 'Test Title',
        subtitle: 'Test subtitle text',
      })
    );
    assert.ok(html.includes('Test Title'), 'Should contain title');
    assert.ok(html.includes('Test subtitle text'), 'Should contain subtitle');
  });

  it('renders FeatureCard with content', () => {
    const html = renderToString(
      React.createElement(FeatureCard, {
        icon: '🌳',
        title: 'Feature Title',
        description: 'Feature description text',
      })
    );
    assert.ok(html.includes('🌳'), 'Should contain icon');
    assert.ok(html.includes('Feature Title'), 'Should contain title');
    assert.ok(html.includes('Feature description text'), 'Should contain description');
  });
});

describe('Pages', () => {
  it('renders HomePage with hero content', () => {
    const html = renderToString(
      React.createElement(
        StaticRouter,
        { location: '/' },
        React.createElement(HomePage)
      )
    );
    assert.ok(html.includes('Bonsai'), 'Should contain Bonsai text');
    assert.ok(html.includes('South Carolina'), 'Should contain South Carolina');
    assert.ok(html.includes('Become a Member'), 'Should contain CTA');
  });
});

describe('Layout', () => {
  it('renders MainLayout navigation', () => {
    const html = renderToString(
      React.createElement(
        StaticRouter,
        { location: '/' },
        React.createElement(MainLayout)
      )
    );
    assert.ok(html.includes('Bonsai Club'), 'Should contain brand name');
    assert.ok(html.includes('nav'), 'Should contain nav element');
  });
});
