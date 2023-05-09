<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"  xmlns="http://docbook.org/ns/docbook"   xmlns:xlink="http://www.w3.org/1999/xlink"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<article>
<xsl:variable name="version" select="/article/@version"/>
<xsl:attribute name="version"><xsl:value-of select="$version"/></xsl:attribute>
<xsl:attribute name="xml:lang"><xsl:value-of select="/article/@xml:lang"/></xsl:attribute>
<xsl:attribute name="xmlns"><xsl:value-of select="/article/@version"/></xsl:attribute>
<info>
<title>
<xsl:value-of   select="/article/info/title"/>
</title>
</info>
<xsl:for-each select="/article/para">
<para>
<xsl:value-of   select="."/>
</para>
</xsl:for-each>
<xsl:for-each select="/article/literallayout">
<literallayout>
<xsl:value-of   select="."/>
</literallayout>
</xsl:for-each>
</article>
</xsl:template>
</xsl:stylesheet>