# minelev-kompetansebevis

Service for YFF kompetansebevis

## API

All API calls needs an Authorization header with valid jwt

```bash
$ http GET https://kompetansebevis.service.io/kompetansebevis/docx/1234 'Authorization: Bearer <INSERT TOKEN>'
```

### ```GET /kompetansebevis/:format/:id```

Get a specific kompetansebevis. Valid formats are `docx` and `json`

```bash
$ http GET https://kompetansebevis.service.io/kompetansebevis/docx/1234 'Authorization: Bearer <INSERT TOKEN>'
```

## Deployment - ZEIT/Now

Change content of [production.env](production.env) to match your environment.

Change content of now:alias in [package.json](package.json) to match your domains.

Deploy service.

```bash
$ npm run deploy
```

## License

[MIT](LICENSE)

![Robohash image of minelev-kompetansebevis](https://robots.kebabstudios.party/minelev-kompetansebevis.png "Robohash image of minelev-kompetansebevis")