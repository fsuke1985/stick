/**
 * @jest-environment jsdom
 */
import { expect } from "@jest/globals"
import useSWR from "swr"
import { fetcher } from "../lib/fetcher"
import renderer from 'react-test-renderer';
import Index from "@/pages/index"

test('fetcher', async () => {
//    await expect(fetcher("https://stick-9on9oxd6.an.gateway.dev/")).resolves.not.toBeNull()
})

test('api called', async () => {
  const container = renderer.create(<Index />).toJSON()
  expect(container).toMatchSnapshot()
})