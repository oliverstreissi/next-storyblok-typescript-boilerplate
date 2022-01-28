import { StoryblokComponent } from 'storyblok-js-client';

export interface GridComponent extends StoryblokComponent<string> {
  columns: StoryblokComponent<string>[];
}
