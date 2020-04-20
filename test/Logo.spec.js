import { shallowMount } from "@vue/test-utils";
import App from "@/components/App.vue";

describe("App.vue", () => {
  test("render title", () => {
    const wrapper = shallowMount(App, {});
    let title = wrapper.text();

    expect(title).toBe("App");
  });
});
