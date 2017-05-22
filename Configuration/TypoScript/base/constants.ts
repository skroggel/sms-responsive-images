tx_smsresponsiveimages {
  # cat=content/cTextmedia/b8; type=string; label= Additional Image Sizes for Responsive Images: Additional image sizes that should be generated for each content image (comma-separated list of either image widths specified in pixels or pixel density descriptors, e. g. "2x")
  srcset = 400, 600, 800, 1000, 1200

  # cat=content/cTextmedia/b9; type=string; label= Sizes Query for Responsive Images: Sizes query which tells the browser which of the image sizes should be used in the current environment (%d can be used as a placeholder for the calculated image width)
  sizes = (min-width: %dpx) %dpx, 100vw
}
