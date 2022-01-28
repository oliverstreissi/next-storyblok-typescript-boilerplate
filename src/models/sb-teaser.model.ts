import { StoryblokComponent } from 'storyblok-js-client';

export interface TeaserComponent extends StoryblokComponent<string> {
  headline: string;
}
