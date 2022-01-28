import { StoryblokComponent } from "storyblok-js-client";

export interface PageComponent extends StoryblokComponent<string> {
  body: StoryblokComponent<string>[];
}
