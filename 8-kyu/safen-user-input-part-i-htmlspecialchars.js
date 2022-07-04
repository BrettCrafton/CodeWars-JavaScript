function htmlspecialchars(formData) {
  return formData.split('').map(x => x == '<' ? '&lt;' :  x == '>' ? '&gt;' :  x == '"' ? '&quot;' : x == '&' ? '&amp;' : x).join('');
}