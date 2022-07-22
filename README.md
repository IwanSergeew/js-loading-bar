# Javascript Loading Bar

## Usage/Examples

```javascript
<head>
    ...
    <script src="assets/js/loading-bar.js"></script>
</head>
<body>
    <div id="loadingBar" class="loading-bar"></div>
    
    const loadingBar = new LoadingBar({
        id: 'loadingBar',
        color: [
            { max: 20, use: 'red' },
            { max: 40, use: 'orange' },
            { max: 60, use: 'yellow' },
            { max: 80, use: 'lightgreen' },
            { max: 100, use: 'green' }
        ]
    });
    
    loadingBar.add(5);
    
    loadingBar.set(50);
</body>
```

## Screenshots

![App Screenshot](https://gcdnb.pbrd.co/images/OK7jIR7V1eaB.gif?o=1)

