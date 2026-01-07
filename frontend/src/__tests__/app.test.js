import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from '../App.jsx';

describe('App', () => {
  it('renders a call to action', () => {
    const html = renderToString(<App />);
    assert.ok(html.includes('Contact the owner'));
  });
});
