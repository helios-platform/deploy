function heliosArt () {
  const asciiArt = `
                                                                                                      
                                                                                                                                              
                                              ███████████                                            
                                          ███▓░░░░░░░░░▒▒▓██            ██                           
                                        ██▓▒░░░░░░░░░░░░░░░▒▓█          ██                           
                                        ██▒░░░░░▒▓▓█████▓▓▒░▒▓██       █████                         
                                      █▓▒░░░░░▒▓████████▓▓█▓▒▒▓██    ████████                        
                                      █▓░░░░▒▓████████████▓▓▓▓▒▓█      ███                           
                                      █▓▒░░░▒▓██████████████▓▒▓▒▓█       ██                           
                                      █▓░░░░▒▓██████████████▓░▓▒▓██                                   
                                      █▓▒░░░▒▓██████████████▒▒▓▒▓██████▓██       ██                   
                                      ██▓░░░░▒█████████████▓▒▓▓▒▓██▓▒░▒▒▒██    █████                  
                                      ██▓░░░░▒▓██████████▓▓▓▓▒▓█▒▒▓▒▒▒▓▓██      ██                   
                                        ██▓▒░░░░░▒▒▓▓▓▓▓▓▓▓▒▒▒▓▒▒▓▒▒▒▓▓▒▓██                           
                                    ███▓▓▓██▓▒▒▒░░░░░░░░░▒▒▓▓▒░░▒▓▓▒▒███                             
                                ███▓▓▒░░░░▒▓█▓▒▒▒▒▓█▓▓▓▓▓█▓░░░░░░░▒██                                
                              ███▓█▒░░░░░░░░▒▓█▓▒▒▒▒█▒▒▒▓█▓▒░░░░░▒▓█             █                    
                            ██▓▓▓▒▒▓░░░░▒▓▒░░▒▓█▓▒▓▓▓▓▓██▓░▒▓▒▒▓██              ████                  
                          █▓▒▒▒▓█▒▓▓░░░▓▒░░░▒▓▓░▒▒▒▒▒▒▓▓░░░▓██                  ██                   
                          █▓▓▒░░░▓▒▒█▒▓▓▓░░▒▒▓▓▒░▒▒▒▒▒▒▓▓░░░▒█    █              █                    
                          ████▒▒███  ██▓███▓▓▓▓██▓▓▓▓██▒▒░░▓█   ███                                  
                              ██      ██▓▒░░░░░░░░▓▒░░▒▓██▓▓█     ██                                  
                                    ██▓▒▓▓▒░░░░░░▒▓░░░░░░▒███                                         
                                  █▓░░░░░░░▒▓████▓▓▒▒▒▓▓████                                         
                                ██▒░░░░░░░░░░░░░░░░░░░░░░░▓██                                        
                              ██▓█▒░░░░░░░░░░░░▒▒░░░░░░░░░░▒██                                       
                              █▓▒░░▓▓░░░░░░░▓▓███▓▒░░░░░░░░░░▓██                                      
                            █▒░░░░░▒▓▓▒░▓▓██     ███▒ ░░░░░░▒▓█                                      
                          ███▒░░░░░░░▒███         █▓▒▓▓▓▓▒▒▓▓██                                      
                          █▓▓▒▓▓▓░░░▓██           ██░░░░▒▒▒▒▓██                                       
                          ▓▓▒▒▒▓████            ███▓░░░░░░▒▓█                                        
                              ██                  █▒░▓▓▓▒▒▓██                                         
                                                  █▓░▒▒▓▓██                                           
                                                  █▓▒▒▓██                                            
                                                    █████                                             
                                                                                                      
                                                                                                      
                                                                                                      
                                            ███  ████                                                
                  ███     ████              ████ ████                                                
                  ███     ████     █████    ████  ███     █████      █████                           
                  ███     ████  ██████████  ████ ████  ██████████  █████████                         
                  ████████████  ████  █████ ████ ████ █████  █████ ████  ████                        
                  ████████████ ████████████ ████ ████ ████    █████ ███████                          
                  ███     ████ ████         ████ ████ ████    █████    ██████                        
                  ███     ████  ██████████  ████ ████  ███████████ ██████████                        
                  ███     ████    ███████   ████ ████   ████████     ██████                          
                                                                                                      
                                                                                                                                                                      
                                                                                                      `;

  function interpolateColor(color1, color2, factor) {
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
  }

  function rgbToAnsi(r, g, b) {
    return `\x1b[38;2;${r};${g};${b}m`;
  }

  function gradientColor(startColor, endColor, percent) {
    const color = interpolateColor(startColor, endColor, percent);
    return rgbToAnsi(...color);
  }

  const lines = asciiArt.split('\n');
  const startColor = [255, 0, 0];  // Red
  const endColor = [0, 0, 255];    // Blue

  lines.forEach((line, index) => {
    const percent = index / (lines.length - 1);
    const colorCode = gradientColor(startColor, endColor, percent);
    console.log(`${colorCode}Line ${index + 1}: ${line}\x1b[0m`);
  });

}

exports.heliosArt = heliosArt;