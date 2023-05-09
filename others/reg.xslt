<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<article>
<xsl:variable name="lang" select="/article/@lang"/>
<xsl:attribute name="lang"><xsl:value-of select="$lang"/></xsl:attribute>
<para>
<xsl:for-each select="/article/para/note">
<note>
<remark>
<xsl:value-of   select="./remark"/>
<xsl:variable name="class" select="./remark/@class"/>
<xsl:attribute name="class"><xsl:value-of select="$class"/></xsl:attribute>
</remark>
</note>
</xsl:for-each>
</para>
</article>
</xsl:template>
</xsl:stylesheet>