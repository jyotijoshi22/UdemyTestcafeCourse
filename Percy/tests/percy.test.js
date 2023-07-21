import { Selector } from "testcafe";
import percySnapshot from "@percy/testcafe";

//prettier
fixture`Visual regression test with Percy`.page`http://www.example.com`;

test("Percy demo- example Page", async (t) => {
  await t.wait(1000);
  await percySnapshot(t, "Example Page");
});
