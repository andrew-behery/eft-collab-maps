name: Tests
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-16.04
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Start App
        run: |
          yarn
          NODE_ENV=test yarn build
          NODE_ENV=test yarn start &

      - name: Run E2E
        run: |
          yarn test
      
      - uses: actions/upload-artifact@v2
        if: always()
        with:
          name: Cypress E2E Videos
          path: cypress/videos
          