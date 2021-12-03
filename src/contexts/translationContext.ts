import React from 'react';
import { OneLanguageTranslation, translationEng } from '../utils/translations';

export const TranslationContext = React.createContext<OneLanguageTranslation>(translationEng);