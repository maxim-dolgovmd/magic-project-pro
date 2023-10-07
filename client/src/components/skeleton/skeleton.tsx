import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={163}
    height={171}
    viewBox="0 0 163 171"
    backgroundColor="#8585AD"
    foregroundColor="#b1aeae"
  >
    <rect x="30" y="18" rx="19" ry="19" width="91" height="70" /> 
    <rect x="58" y="101" rx="9" ry="9" width="37" height="14" /> 
    <rect x="16" y="120" rx="9" ry="9" width="120" height="13" /> 
    <rect x="16" y="138" rx="9" ry="9" width="120" height="13" /> 
    <circle cx="150" cy="17" r="12" />
  </ContentLoader>
)

export default MyLoader