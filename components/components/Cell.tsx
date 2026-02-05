<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Skyfall Protocol - Game Concept</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              poppins: ['Poppins', 'sans-serif'],
              roboto: ['Roboto', 'sans-serif'],
              oxanium: ['Oxanium', 'sans-serif'],
              inter: ['Inter', 'sans-serif'],
            },
            colors: {
              neon: {
                bg: '#050505',
                card: '#121212',
                cyan: '#00e5ff',
                purple: '#d500f9',
              }
            },
            animation: {
              'glow-pulse': 'glowPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              'pop-in': 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
              'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
              glowPulse: {
                '0%, 100%': { opacity: 1, filter: 'brightness(1.2)' },
                '50%': { opacity: .8, filter: 'brightness(1)' },
              },
              popIn: {
                '0%': { opacity: 0, transform: 'scale(0.5)' },
                '100%': { opacity: 1, transform: 'scale(1)' },
              },
              slideUp: {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              }
            }
          },
        },
      }
    </script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oxanium:wght@400;600;700&family=Poppins:wght@400;600;700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
      body {
        background-color: #050505;
        color: white;
        overscroll-behavior: none;
        -webkit-tap-highlight-color: transparent;
      }
      /* Custom scrollbar hide for clean UI */
      ::-webkit-scrollbar {
        display: none;
      }
      .neon-text-cyan {
        text-shadow: 0 0 10px rgba(0, 229, 255, 0.7), 0 0 20px rgba(0, 229, 255, 0.5);
      }
      .neon-text-purple {
        text-shadow: 0 0 10px rgba(213, 0, 249, 0.7), 0 0 20px rgba(213, 0, 249, 0.5);
      }
      .neon-box-cyan {
        box-shadow: 0 0 15px rgba(0, 229, 255, 0.3), inset 0 0 10px rgba(0, 229, 255, 0.1);
        border: 1px solid rgba(0, 229, 255, 0.5);
      }
      .neon-box-purple {
        box-shadow: 0 0 15px rgba(213, 0, 249, 0.3), inset 0 0 10px rgba(213, 0, 249, 0.1);
        border: 1px solid rgba(213, 0, 249, 0.5);
      }
      .glass-panel {
        background: rgba(18, 18, 18, 0.8);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }
    </style>
  <script type="importmap">
{
  "imports": {
    "react/": "https://esm.sh/react@^19.2.3/",
    "react": "https://esm.sh/react@^19.2.3",
    "react-dom/": "https://esm.sh/react-dom@^19.2.3/"
  }
}
</script>
<link rel="stylesheet" href="/index.css">
</head>
  <body>
    <div id="root"></div>
  <script type="module" src="/index.tsx"></script>
</body>
</html>
