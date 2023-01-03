/**
 * @jest-environment jsdom
 */
import { expect } from "@jest/globals"
import useSWR from "swr"
import renderer from 'react-test-renderer';
import type { NextApiRequest, NextApiResponse } from "next/types";
import Index from "@/pages/index"
import handler from '@/api/Apple/index'
import fetcher from '../lib/fetcher'
import 'cross-fetch/polyfill'
import { createMocks } from 'node-mocks-http';

// /api/hooks/index.ts
test('handler', async () => {
  // create a mock
  const { req, res } = createMocks({
    method: 'GET'
  })

  await handler(req, res)

  expect(res._getData()).toMatchObject({X: "named"})
}, 15000) // out of time 10sec

// /lib/fetcher.ts
test('fetcher', async () => {
  const data: AppleMusicApi = await fetcher('http://localhost:3000/api/Apple');
  expect(data).toMatchObject({X: "named"})
}, 15000)

test('apicalled', async () => {
  const container = renderer.create(<Index />).toJSON()
  expect(container).toMatchSnapshot()
}, 15000)