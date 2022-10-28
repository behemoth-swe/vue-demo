
let create_opacity_controlled_color = (rgb_color) => {
    return ({ opacityValue }) => {
        if (opacityValue === undefined) return `rgba(var(${rgb_color}))`;

        return `rgba(var(${rgb_color}), ${opacityValue})`; 
    }
}

let hex_to_rgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? parseInt(result[1], 16) +
        "," +
        parseInt(result[2], 16) +
        "," +
       parseInt(result[3], 16)  
    : null;
}

module.exports = {
    create_opacity_controlled_color,
    hex_to_rgb
}
